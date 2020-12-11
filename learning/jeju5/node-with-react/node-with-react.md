
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
* Write code!
  * Node.js doesn't support ES6. so import statement should follow the JS Common syntax
    ```js
    // import express from 'express';
    const express = require('express');

    const app = express();

    app.get('/', (req, res) => {
      res.send({
        hi: 'there'
      });
    });

    app.listen(5000);
    ```
