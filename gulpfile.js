var gulp = require('gulp');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express'),
	app 	= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', function(req, res) {
// 	//console.log(__dirname + '\\app\\index.html')
// 	//res.sendFile(__dirname + '/app/index.html');
// });

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('server', function(){

	app.use('/app', express.static(__dirname + '/app'));
	app.use('/node_modules', express.static(__dirname + '/node_modules'));
	app.use('/bower_components', express.static(__dirname + '/bower_components'));

	app.use('/api', require('./server/pushups'));

	

	app.listen(3000, function() {
		console.log('I\'m Listening...');
	});

});

gulp.task('run', ['server']);