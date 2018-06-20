//create express application
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var app = express();

//set port number
app.set('port', (process.env.PORT || 3000));

//configure app
app.set('view engine', 'ejs');	//defining view engine as ejs
app.set('views', path.join(__dirname, 'views'));	//setting path for views folder



//middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function (req, res) {
   res.render('index');
});

app.post('/', function(req, res) {
	res.end('success!');
});

app.listen(app.get('port'), function() {
	console.log('Server started on port', app.get('port'))
});