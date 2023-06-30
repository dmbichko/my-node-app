In this example, we've added a few more features to the application:

Logging Middleware: A middleware function is added to log incoming requests along with the timestamp.
JSON Parsing Middleware: A middleware function is added to parse incoming JSON data.
Additional Routes: /users route returns a list of users, /users/:id returns a specific user based on the provided ID, and /users with a POST request creates a new user with an auto-generated ID.
Not Found Route: A catch-all route is added to handle requests to routes that are not defined.
To run this application, follow the same steps as before:

1. Create a new directory for your project:
mkdir my-node-app
cd my-node-app
2. Initialize a new Node.js project and provide a name and other details when prompted:
npm init
3. Install the required dependencies (in this case, Express.js):
npm install express
Test it

sudo apt-get install gnupg
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] \
    https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | \
    sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update

sudo apt-get install -y mongodb-org=6.0.4 mongodb-org-database=6.0.4 mongodb-org-server=6.0.4 mongodb-org-mongos=6.0.4 mongodb-org-tools=6.0.4
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod

mongosh
use app
db.createUser({
  user: "username",
  pwd: "password",
  roles: [{ role: "readWrite", db: "your_database_name" }]
})
exit
sudo vi /etc/mongod.conf
sudo systemctl restart mongod
sudo systemctl status mongod

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 14.20.1
nvm use 14.20.1

git clone 
npm init
npm install express body-parser mongoose bcrypt jsonwebtoken
node app.js