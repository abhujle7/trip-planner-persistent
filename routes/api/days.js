var express = require('express');
var router2 = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Day = models.Day;
var Promise = require('bluebird');

router2.get('/', function(req, res) {
	Day.find().then(function(days) {
		console.log("days", days); 

		res.json(days);
	})
	// res.send("hello from get");
})

//get one specific day
router2.get('/:id', function (req, res) {
	Day.find({_id: req.params.id}).then(function(day) {
		res.json(day);
	})

})

// //delete one specific day
router2.delete('/:id', function (req, res) {
	Day.find({_id: req.params.id}).remove().exec()
		res.sendStatus(201);
})


// //create a new day
router2.post('/', function (req, res) {
	var day = new Day({

	})
	day.save().then(function (updatedDay) {
		res.json(updatedDay);
	})
})

// //add a hotel
router2.put('/:id/Hotel', function (req, res) {
	//find the day
	Day.find({_id: req.params.id}).then(function(day){
		var newHotel = req.body.title;
		day.update({hotel: newHotel}).exec(function(updatedHotel){
			res.json({message:'Updated succesfullt', hotel: updatedHotel})
		})
	})
})

// //remove a hotel
// router2.delete('/:id/Hotel', function (req, res) {
	
// }

// //add a restaurant
// router2.post('/:id/Restaurant', function (req, res) {
	
// }

// //remove a restaurant
// router2.delete('/:id/Restaurant', function (req, res) {
	
// }

// //add an activity
// router2.post('/:id/Activity', function (req, res) {
	
// }

// //remove an activity
// router2.delete('/:id/Activity', function (req, res) {
	
// }



// router2.post('/', function(req, res) {
// 	Day.save(function(err, day) {

// 	})
// 	console.log(req.body);
// })

// router2.post('/', function(req, res) {
// 	// res.send("hello from post");
// 	res.json(daysModule);

// })

// router2.post('/:id/', function(req, res) {
// 	res.json(daysModule)
// 	res.send("hello from post");
// identify id of day
// select attraction of day and either add or remove it
// })







module.exports = router2;