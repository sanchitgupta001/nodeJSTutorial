var connect = require('connect');
var http = require('http');

var app = connect(); // RequestListener

function doFirst(request, response, next){
	console.log('Qwerty!!!');
	next();
}

function doSecond(request, response, next){
	console.log('Rocks !!!');
	next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is running !!!");