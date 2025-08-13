

## **Terminal Commands – Server Setup**

Open your terminal in the desired project location, then run:

```bash
# Create and navigate to the server folder
mkdir server
cd server

# Create the main server file
touch server.js

# Initialize a new Node.js project
npm init -y

# Install required dependencies
npm install express mongoose dotenv cors nodemon
```

**Additional Step – Update `package.json`**
In your `package.json` file:

* Add `"type": "module"` under the top-level properties.
* Add a `dev` script for Nodemon in the `"scripts"` section:

```json
"type": "module",
"scripts": {
  "dev": "nodemon server.js"
}
```
