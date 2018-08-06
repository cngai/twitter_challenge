//create express application
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./api/routes');
var path = require('path');

var app = express();

//set port number
app.set('port', (process.env.PORT || 3000));

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());		//parses text as JSON
app.use(bodyParser.urlencoded({extended: true}));	//parses text as URL encoded data
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(function(res, res, next){
	res.setHeader("Access-Control-Allow-Origin", "*");	//allow access to all domains
	res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "*");
	next();
});

app.use('/', routes);

app.listen(app.get('port'), function() {
	console.log('Server started on port', app.get('port'))
});