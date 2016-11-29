// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var cookieParser = require('cookie-parser');
var morgan      = require('morgan');
var passport = require('passport');
var flash    = require('connect-flash');
var session      = require('express-session');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var User   = require('./app/models/user'); // get our mongoose model

// configuration ===========================================

// config files
var db = require('./config/db');
var secrets = require('./config/secrets');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
	console.log("Mongoose DB connected!");
});

app.set('superSecret', db.secret); // secret variable


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// required for passport
app.use(session({ secret: secrets.session_secret })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// use morgan to log requests to the console
app.use(morgan('dev'));

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// start app ===============================================
app.listen(port);
console.log('Listening on port ' + port + '...'); 	// shoutout to the user
module.exports = app; 					            // expose app
