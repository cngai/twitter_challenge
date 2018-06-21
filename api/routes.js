var express = require('express');
var router = express.Router();

//router configuration
router.use(function(req, res, next){
	console.log("/" + req.method);
	next();
});

router.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html', function(err){
		if (err){
			next(err);
		}
		else{
			console.log('Sent index.html');
		}
	});
});

var twitterController = require('./twitter-controller');
router.post('/tweets', twitterController.getTweets);
module.exports = router;