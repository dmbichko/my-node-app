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
