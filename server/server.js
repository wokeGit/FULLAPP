var express = require('express');
var mongoose = requires('mongoose');
var app = express();

app.get('/', function(req, res) {
	res.send('working');
});

app.get('/api/pushups', function(req, res) {
	res.send('fsadfasdf')
});

app.listen(3000);
console.log('API is running on port 3000');