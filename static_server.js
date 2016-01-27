var express = require('express');

var app = express();

app.use(express.static('./'));

var server = app.listen(3000, function() {
	console.log('Example app listening on port: ' + server.address().port);
});

app.get('/myFirstRoute', function(request, response) {
	response.send('<body><h1>hello everyone!</h1></body>');
});