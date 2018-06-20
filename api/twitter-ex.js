var Twit = require('twit');	//import twit package
var config = require('./config');
var T = new Twit(config);	//object of twit

var params = {
	screen_name: 'yousadirtybum',
	count: 1,
	include_rts: false
}

T.get('statuses/user_timeline', params, searchedData);

function searchedData(err, data, response){
	console.log(data);
}