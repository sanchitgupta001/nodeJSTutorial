// Server Configuration using Connect
var connect = require('connect');
var http = require('http');

var app = connect(); // RequestListener

function doFirst(request, response, next){
	console.log('Qwerty!!!');
	next(); // Using next function in the stack of middleware
}

function doSecond(request, response, next){
	console.log('Rocks !!!');
	next();
}

function profile(request, reponse){
	console.log('User Requested Profile');
}

function forum(request, reponse){
	console.log('User Requested Forum');
}
// Using stack of middleware functions
// app.use(doFirst);
// app.use(doSecond);
// Using optional path argument
app.use('/profile',profile);
app.use('/forum',forum);

http.createServer(app).listen(8888);
console.log("Server is running !!!");
