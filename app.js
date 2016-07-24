var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/welcome');
mongoose.connection.on('error',function(err){
    console.log(err);
});


var routes = require('./routes/index');
var users = require('./routes/users');
var forms = require('./routes/forms');
var organizations = require('./routes/organizations');
var jwb = require('./routes/jwb');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
//建立session，并将session存入mongodb
app.use(session({
    secret: 'SECRET_KEY',
    cookie:{maxAge: null},//过期时间
    key: 'SessionID',
    resave: true,
    saveUninitialized: true,
    store : new MongoStore({
    mongooseConnection: mongoose.connection //使用已有数据库连接
    //db : mongoose.connection.db
    })
}));

app.use('/', routes);
app.use('/users', users);
app.use('/forms', forms);
app.use('/organizations', organizations);
app.use('/jwb', jwb);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
