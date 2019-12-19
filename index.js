// USe Nodes's require() function to access the node File System module
const fs = require('fs');


// "argv" stands vor "argument vector"
// (a vector is basically an array)

// console.log(process.argv[2]);
const fileName = process.argv[2]; 
// console.log(fileName);

// Error-first callback
function printContents(error, buffer) {
    if (error) {
        console.log.log(error);
    } else {
        console.log(buffer.toString());
    }
}

fs.readFile(fileName, printContents);