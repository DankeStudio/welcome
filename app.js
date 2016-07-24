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
var organizations = require('./routes/org');
var jwb = require('./routes/jwb');
var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/org', organizations);
app.use('/jwb', jwb);

module.exports = app;
