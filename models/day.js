var mongoose = require('mongoose');
var hotel = require('./hotel').schema;
var activity = require('./activity').schema;
var restaurant = require('./restaurant').schema;
 

var DaySchema = new mongoose.Schema({
	number: Number,
	hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
	restaurants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}],
	activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activities'}]
})

module.exports = mongoose.model('Day', DaySchema);