var path = require('path')

var websiteHome = "Desktop/Qwerty//xyz/index.html";
var websiteAbout = "Desktop/Qwerty/xyz/about.html";

console.log(path.normalize(websiteHome)); // When multiple slashes are found, they're replaced by a single one; On windows, by backslash
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));