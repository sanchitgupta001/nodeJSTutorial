//////////////////////////    Basic JS functions    ///////////////////

// var person = {
// 	firstName: "Sanchit",
// 	lastname: "Gupta",
// 	age: 28
// };
// var printSum = function addNumbers(a, b){
// 	console.log(a + b);
// }

// addNumbers(8, 2);

//////////////////////////    CALLBACK    //////////////////////////

// function placeAnOrder(orderNumber){
// 	console.log("Customer order: ", orderNumber);

// 	cookAndDeliverFood(function(){
// 		console.log("Delivered food Order:", orderNumber);
// 	});
// }

// // Simulate a 5 second operation
// function cookAndDeliverFood(callback){
// 	setTimeout(callback, 0);
// }

// // Simulate users web request
// placeAnOrder(1);
// placeAnOrder(2);
// placeAnOrder(3);
// placeAnOrder(4);
// placeAnOrder(5);
// placeAnOrder(6);


/////////////////////////    References    /////////////////////////////
// var Qwerty = {
// 	favGame: "Badminton",
// 	favMovie: "3-Idiots"
// };

// var Person = Qwerty; // Person is not a copy of Qwerty, it is basically a reference to Qwerty
// Person.favGame = "Table Tennis";
// console.log(Qwerty.favGame);


//////////////////////////    this    //////////////////////////////

// var Qwerty = {
// 	printFirstName: function(){
// 		console.log("Hey! Qwerty Here ...");
// 		console.log(this == Qwerty);
// 	}
// };
// Qwerty.printFirstName();

// // The default calling context for this funtion is global
// function doSomethingGlobal(){
// 	console.log("Global function call");
// 	console.log(this == global);
// }

// doSomethingGlobal();


/////////////////////////    Prototyping    ///////////////////////
// Prototypes are used to add additional functions and properties to some object or class

// function User(){
// 	this.name = "";
// 	this.lifePoints = 100;
// 	this.giveLife = function giveLife(targetPlayer){
// 		targetPlayer.lifePoints += 1;
// 		console.log(this.name + " give 1 lifePoint to " + targetPlayer.name);
// 	}
// }

// var Qwerty = new User();
// var Wendy = new User();

// Qwerty.name = "Qwerty";
// Wendy.name = "Wendy";

// Qwerty.giveLife(Wendy);

// console.log("Qwerty: " + Qwerty.lifePoints);
// console.log("Wendy: " + Wendy.lifePoints);

// // Prototype function
// User.prototype.uppercut = function uppercut(targetPlayer){
// 	targetPlayer.lifePoints -= 3;
// 	console.log(this.name + " just uppercut " + targetPlayer.name);
// };

// Wendy.uppercut(Qwerty);

// console.log("Qwerty: " + Qwerty.lifePoints);
// console.log("Wendy: " + Wendy.lifePoints);

// // Prototype property
// User.prototype.magic = 60;

// console.log("Qwerty: " + Qwerty.magic);
// console.log("Wendy: " + Wendy.magic);

////////////////////    Modules    ///////////////////

// // Importing modules
// var movies = require("./movies"); // no need to include extensions for modules (.js here)
// //movies.avatar(); //This will work with the first module export case
// movies.printAvatar(); //This will work for anonymous function case
// console.log(movies.favMovie);

////////////////////    Shared Modules   ///////////////////
require("./emily");
require("./qwerty");
