const express = require('express');
const app = express();
const port = 3000;

// Middleware: Logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware: JSON Parsing
app.use(express.json());

// Route: Home
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route: Users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
  res.json(users);
});

// Route: User by ID
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = { id: id, name: 'User ' + id };
  res.json(user);
});

// Route: Create User
app.post('/users', (req, res) => {
  const user = req.body;
  // Assuming user has a 'name' property
  user.id = Date.now();
  res.status(201).json(user);
});

// Route: Not Found
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
