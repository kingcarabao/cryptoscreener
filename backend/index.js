const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

/**
 * ENV File
 */
require('dotenv').config();


/**
 * Initializing Express app
 */
const app = express();


/**
 * Applying useful middlewares
 */
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/**
 * CORS
 */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", ["*"]);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


/**
 * Simple Routing
 * /myapi
 */
require('./routes')(app);


/**
 * Set Port and Listen
 */
const port = 4321;
app.listen(port, () => {
    console.log(`Listening on port ${port}; running...`);
});