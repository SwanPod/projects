var express = require('express');
var router = express.Router();

// STRICTLY FOR PASSPORTJS BACKEND WORK

router.get('/login', (req, res) => {
	res.send('Login');
})

router.post('/login', (req, res) => {
	res.send('Login POST');
});

module.exports = router;
