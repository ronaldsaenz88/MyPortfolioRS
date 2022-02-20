/**
 * app.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 05, 2022
 * Modify Date: Feb 19, 2022
 *
 * @link   app.js
 * @file   This file defines the deployment of the project.
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// environment
const dotenv = require("dotenv")
dotenv.config()

// Add Passport and auth libraries
const passport = require("./passport/setup");
const auth = require("./routes/auth");

// database setup
var mongoose = require('mongoose');
var DB = require('./config/db');

// point mongoose to the DB URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

// Connection with DB
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});

// I defined the Routes files
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var projectsRouter = require('./routes/projects');
var servicesRouter = require('./routes/services');
var contactRouter = require('./routes/contact');
var businessContactRouter = require('./routes/business_contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser - middleware which is used to parse the request body 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express Session - Middleware
app.use(require("express-session")({
  secret: "Any normal Word",
  resave: false,
  saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Populate Database
if ( process.env.POPULATE_DB == true ){
  require("./populate_db/populate_user");
  require("./populate_db/populate_business_contact");
}

// I included the routes files into the app to use in the deployment
// Routes
app.use("/auth", auth);
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);
app.use('/business_contact_list', businessContactRouter);

app.use(function (req, res, next) {
  res.locals.login = req.user;
  next();
});

// I included the route to download my resume
app.get('/download-resume', function(req, res){
  const file = `${__dirname}/public/uploads/RESUME_RSAENZ.pdf`;
  res.download(file); // Set disposition and send it.
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
