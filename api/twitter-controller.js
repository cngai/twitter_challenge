var Twit = require('twit');	//import twit package
var config = require('./config');
var T = new Twit(config);	//object of twit

module.exports = {
    getTweets : function (req, res){
	    T.get('statuses/user_timeline', {screen_name: req.body.handle, count: 15}, function(err, data, response){
	    	/*if(!error){
	    		console.log(data);
	    	}
	    	console.log("Response: " + JSON.stringify(response));
	    	console.log(JSON.stringify(data));*/

	    	//data parsed as JSON object
	    	res.json(data);		//send json object
	    	});
    }
};