
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

    const app = express(); // express() creates a express applicaton.

    app.get('/', (req, res) => {
      res.send({
        hi: 'there'
      });
    });

    app.listen(5000); // listen to port 5000
    ```
* Using Heroku
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
    "script": {
      "start": "node index.js"
    },
    ...
    ```
