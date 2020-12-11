
# Section 1: Course Overview - Start Here!

# Section 2: Server Side Architecture
* Starting a project
  `npm init`
  `npm install --save express`
* Node.js and Express.js. What are they?
  * node.js
    * takes care of creating response with backend logic.
  * express.js
    * takes care of http traffic routing
* Write First code!
  * Node.js doesn't support ES6. so import statement should follow the JS Common syntax
    ```js
    // import express from 'express';
    const express = require('express');

    const app = express();

    app.get('/', (req, res) => {
      res.send(
        {
          hi: 'there'
        }
      );
    });

    // naming convention to indicate that variable value is 'final'
    // heroku dynamically assigns a port value as 'process.env.PORT'. in local running use 5000.
    const PORT = process.env.PORT || 5000
    app.listen(PORT);
    ```
* Using Heroku
  * Heroku is PaaS. It runs our app on their cloud when we provide source code.
  * Use port that heroku assigns
    ```js
    // naming convention to indicate that variable value is 'final'
    const PORT = process.env.PORT
    ```
  * Configure versions for heroku
    ```js
    // package.json
    ...
    "engines": {
      "node": "8.1.1",
      "npm": "5.0.3"
    }
    ...
    ```
  * Configure starting (heroku will execute this command upon starting heroku)
    ```js
    // package.json
    ...
    "scripts": {
      "start": "node index.js"
    },
    ...
    ```
  * Create .gitignore
    ```
    // .gitignore
    node_modules
    ```
* Deployment
  ```
  heroku login
  heroku create
  ```
  * heroku create returns app information
    ```
    Creating app... done, ⬢ young-caverns-34293
    https://young-caverns-34293.herokuapp.com/ | https://git.heroku.com/young-caverns-34293.git
    ```
    * young-caverns is a auto-generated app name. `https://young-caverns-34293.herokuapp.com/` is the url of your app
    * https://git.heroku.com/young-caverns-34293.git is the repo you should push your source code to
  ```
  1. git init
  2. git add .
  3. git commit -m "deployment"
  4. git remote add heroku https://git.heroku.com/young-caverns-34293.git
  5. git push heroku master
  6. heroku open
  ```
