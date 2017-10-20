/* Friend Finder                         */
/* Author: Wallis Chau                   */ 
/* Date: 10/16/17                        */
/* Server file                           */
var express = require('express');
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
	console.log('App listeining port' + PORT);
})