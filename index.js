var express = require('express');
var app = express();


app.use('/baby', express.static(__dirname + '/public'));


app.listen(3000, function() {
	console.log('App listening at port 3000!');
});