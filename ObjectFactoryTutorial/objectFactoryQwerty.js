var objectFactoryMovies = require('./objectFactoryMovies');

var qwertyMovies = objectFactoryMovies();
qwertyMovies.favMovie = "Batman";
console.log("Qwerty's Favorite movies is : " + qwertyMovies.favMovie);