const rateLimit = require('express-rate-limit');

const limit = rateLimit({
    max: 500, // max requests
    windowMs: 60 * 60 * 1000, // 1 Hour
    message: 'Too many requests' // message to send
});

module.exports = limit;
