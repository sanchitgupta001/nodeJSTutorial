var objectFactoryMovies = require('./objectFactoryMovies');

var emilyMovies = objectFactoryMovies();
emilyMovies.favMovie = "The NoteBook";
console.log("Emily's Favorite movies is : " + emilyMovies.favMovie);