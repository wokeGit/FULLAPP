
var mongoose = require('mongoose');

var pushupSchema = new mongoose.Schema({
	name: String

});

var Pushup = mongoose.model('Pushup', pushupSchema);

module.exports = { 
	Pushup: Pushup
};