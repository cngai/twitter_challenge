var Twit = require('twit');	//import twit package
var config = require('./config');
var T = new Twit(config);	//object of twit

var params = {
	q: 'akshay',
	count: 1
}

T.get('search/tweets', params, searchedData);

function searchedData(err, data, response){
	console.log(data);
}