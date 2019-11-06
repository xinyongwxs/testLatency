var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var proxy = require('express-http-proxy');

var indexRouter = require('./routes/index');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// app.use('/', proxy('54.255.215.252', {
//     https: true,
//     proxyReqOptDecorator: function(proxyReqOpts) {
//         proxyReqOpts.rejectUnauthorized = false;
//         return proxyReqOpts;
//     }
// }));

module.exports = app;
