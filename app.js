var expreses = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/users');

// App Setup
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(require('express-session')({
	secret: 'You can replace this secret thing later on in development :)',
	resave: false,
	saveUninitialized: false
}));

app.listen(8080, console.log('Started server.'));
