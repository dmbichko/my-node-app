const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://<username>:<password>@localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema and model for a User
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});
const User = mongoose.model('User', userSchema);

// Middleware: JSON Parsing
app.use(bodyParser.json());

// Route: User Registration
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hashedPassword) => {
      const user = new User({ email, password: hashedPassword });
      return user.save();
    })
    .then(() => {
      res.status(201).json({ message: 'User registered successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while registering the user' });
    });
});

// Route: User Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ error: 'Authentication failed' });
      } else {
        return bcrypt.compare(password, user.password)
          .then((isValidPassword) => {
            if (!isValidPassword) {
              res.status(401).json({ error: 'Authentication failed' });
            } else {
              const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
              res.json({ message: 'Authentication successful', token });
            }
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while authenticating the user' });
    });
});

// Route: Protected Route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

// Middleware: JWT Authentication
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    res.status(401).json({ error: 'Authentication failed' });
  } else {
    jwt.verify(token, 'secret_key', (err, user) => {
      if (err) {
        res.status(401).json({ error: 'Authentication failed' });
      } else {
        req.user = user;
        next();
      }
    });
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
