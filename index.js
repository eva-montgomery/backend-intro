// USe Nodes's require() function to access the node File System module
const fs = require('fs');
// const printer = require('./printer');

// "Pluck out" specific values from tge object
const {printContents, printSentiment} = require('./printer');
// this is the "destructuring" syntax


// "argv" stands vor "argument vector"
// (a vector is basically an array)

// console.log(process.argv[2]);
const fileName = process.argv[2]; 
// console.log(fileName);



fs.readFile(fileName, printSentiment);