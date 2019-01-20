var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var User = require('./models/user')
var passport = require('passport');
var LocalStategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/users');

// App Setup
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(require('express-session')({
	secret: 'You can replace this secret thing later on in development :)',
	resave: false,
	saveUninitialized: false
}));

// Routes
app.use('/dashboard', require('./routes/index.js'));
app.use('/auth', require('./routes/auth.js'));

app.get('/', (req, res) => {
	// This will be changed to show different pages based off current login info
	res.redirect('/dashboard');
});

app.listen(8080, console.log('Started server.'));
