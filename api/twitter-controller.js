var Twit = require('twit');	//import twit package
var config = require('./config');
var T = new Twit(config);	//object of twit

module.exports = {
    getTweets : function (req, res){
    T.get('statuses/user_timeline', {screen_name: req.body.data, count: 15}, function(error, data, response){
    	if(!error){
    		console.log(data);
    	}
    	console.log("Response: " + JSON.stringify(response));
    	console.log(JSON.stringify(data));
    		res.json(data);
    	});
    }
};