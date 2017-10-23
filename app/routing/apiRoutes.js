/* Friend Finder                         */
/* Author: Wallis Chau                   */ 
/* Date: 10/16/17                        */
/* Description: api route setting        */
/*             Add friend to list        */
/*             return best match         */

var friendData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendData);
	});

	app.post('/api/friends', function(req, res) {
		var data = req.body;
		// console.log(data);
		//find match
		var closestMatch = getMatch(data, friendData);
		//add to Data
		friendData.push(data);
		// console.log(req);
//		res.json({name:data.name, photo:data.photo});
		res.json({name:friendData[closestMatch[0].index].name, 
			photo:friendData[closestMatch[0].index].photo});
	})
};

function getMatch(data, friendData) {
	//initial value
	var leastDiff = [{'index':-1, 'value': 99}];
	for (var i in friendData) {
		var sumOfDiff = 0;
		for (var j in friendData[i].scores) {
			sumOfDiff += getSum(friendData[i].scores[j], data.scores[j]);
		}//for j
		// console.log(i + '-> ' + sumOfDiff);
		//store the less sumOfDiff
		if (sumOfDiff < leastDiff[0].value) {
			leastDiff[0].index = i;
			leastDiff[0].value = sumOfDiff;
		} 
	}//for i
	// console.log(leastDiff);
	return leastDiff;
}//getMatch

function getSum(num1, num2) {
	return (num1>num2?(num1 - num2): (num2-num1));
}

