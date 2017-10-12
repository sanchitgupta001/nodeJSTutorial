var http = require('http');

function onRequest(request, response){ // Request object contains info about users request; Response object is the object we can send back to the user
	console.log("User made a request " + request.url);
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Here is the response to look out for !!!");
	response.end();
}

// Here, two requests are made by the browser. One for the url the user is looking for and other to the favicon

http.createServer(onRequest).listen(8888);
console.log("Server is now running");