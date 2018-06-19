//create express application
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

//set port number
app.set('port', (process.env.PORT || 3000))

//middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function (req, res) {
   res.send('Server running.');
})

app.listen(app.get('port'), function() {
	console.log('Server started on port', app.get('port'))
})