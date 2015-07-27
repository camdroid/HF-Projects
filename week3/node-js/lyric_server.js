var lyrics = require("./lyrics.js");

var http = require('http');

http.createServer(function(request, response) {
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.write(lyrics.getRandomLyric());
	response.end();
}).listen(8080);