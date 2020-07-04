const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Helmet
const mongoSanitize = require('express-mongo-sanitize'); // Data Sanitization against NoSQL Injection Attacks
const xss = require('xss-clean'); // Data Sanitization against XSS attacks

const logMiddleware = require('../log').middleware;
const validation = require('./validate');
const limiter = require('./ratelimiter');
const notFound = require('./404');
const { resultHandler, errorHandler } = require('./result');

module.exports = {
    before: [
        cors(),
        helmet(),
        logMiddleware,
        bodyParser.json({ limit: '10kb' }),
        limiter,
        validation,
        mongoSanitize(),
        xss()
    ],

    after: [notFound, resultHandler, errorHandler]
};
