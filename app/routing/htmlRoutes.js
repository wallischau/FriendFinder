/* Friend Finder                         */
/* Author: Wallis Chau                   */ 
/* Date: 10/16/17                        */
/* Description: html route setting       */
/*             load html files           */

var path = require("path");

module.exports = function(app) {
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};