var express = require('express');
var app = express();
var db = require('./db');

var CustomerController = require('./customer/CustomerController');
app.use('/customers', CustomerController);

module.exports = app;