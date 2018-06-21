var Twit = require('twit');	//import twit package
var config = require('./config');
var T = new Twit(config);	//object of twit

/*var params = {
	screen_name: 'yousadirtybum',
	count: 1,
	include_rts: false
}*/


function getTweets (req, res, next){
	T.get('statuses/user_timeline', {screen_name: req.body.data, count: 1}, searchedData);
}


function searchedData(err, data, response){
	if (!err){
		console.log(data);
	}
	console.log("Response: " + JSON.stringify(response));
	console.log(JSON.stringify(data));
	res.json(data);
}

module.exports = {
	getTweets: getTweets
}

/*
module.exports = {
    getTimeline : function (req, res){
    T.get('statuses/user_timeline', {screen_name: req.body.data, count: 15}, function(error, data, response){
     if (!error) {
       console.log(data);
     }
     console.log("RESPONSE: " + JSON.stringify(response));
     console.log(JSON.stringify(data));
      res.json(data);
     });
  }
};*/