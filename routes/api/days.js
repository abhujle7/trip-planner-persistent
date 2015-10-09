var express = require('express');
var router2 = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Day = models.Day;
var Promise = require('bluebird');

router2.get('/', function(req, res) {
	Day.find().then(function(day) {
		res.json(daysModule);
	})
	// res.send("hello from get");
})

router2.put('/', function(req, res) {

	console.log(req.body);
})

router2.post('/', function(req, res) {
	// res.send("hello from post");
	res.json(daysModule);

})

router2.post('/:id/', function(req, res) {
	res.json(daysModule)
	// res.send("hello from post");
//identify id of day
//select attraction of day and either add or remove it
})

router2.delete('/', function(req, res) {
	res.send("hello from delete");

})





module.exports = router2;