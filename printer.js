
// Importing the sentiment module from the project's node_modules directory.
const Sentiment = require('sentiment');

// Create a new Sentiment analyzer object/instance:
const sentiment = new Sentiment();

// Error-first callback
function printContents(error, buffer) {
    if (error) {
        console.log.log(error);
    } else {
        console.log(buffer.toString());
    }
}

// "Shape" the function so that it is an error-first callback:
function printSentiment(error, buffer) {
    if (error) {
        console.log(error);   
    } else {
        // Use the thing
        const result = sentiment.analyze(buffer.toString());
        console.dir(result);
    }
}

// --> only one would be available:
// module.exports = printContents;
// module.exports = printSentiment;

// Make both available:
module.exports = {
    // printContents: printContents,
    // printSentiment: printSentiment 
    // You can omit the colin and the value if the value is the same word as the key
    printContents,
    printSentiment
}
