const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

module.exports = {
    app,
    port,
    express
}