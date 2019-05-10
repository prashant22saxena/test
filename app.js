const express = require('express');
const bodyParser = require('body-parser');
const app = express ();
const sign_up = require('./routes/sign_up');
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
}));
app.use('/api',sign_up);

module.exports = app;



