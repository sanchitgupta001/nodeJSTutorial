var http = require('http');
var fs = require('fs');

// 404 response
function send404Response(response){
	response.writeHead(404,{"Content-Type": "text/plain"});
	response.write("Error 404: Page Not Found!");
	response.end();
}

// Handle a user request
function onRequest(request, response){ // Request object contains info about users request; Response object is the object we can send back to the user
	if(request.method == 'GET' && request.url == '/'){
		response.writeHead(200,{"Content-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response); // Not sure about size of the file, so we want to send the response back in a stream
		// Ensures better performance
		// pipe: pipe stream to response object
	}
	else{
		send404Response(response);
	}
}

http.createServer(onRequest).listen(8888); // 8888: Port Number, onRequest: Callback Function
console.log("Server is now running");
