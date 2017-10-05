var fs = require('fs'); // File System Module (Core Module)

fs.writeFileSync("corn.txt","Corn is good. Corn is life."); // For Creating Files
console.log(fs.readFileSync("corn.txt").toString()); // For reading and displaying the contents of a file

