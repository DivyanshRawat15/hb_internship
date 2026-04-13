const url = require("url");

var args = process.argv;
var inputURL = args[2];

if (!inputURL) {
    console.log("Please provide a URL.");
    process.exit();
}

const parsedURL = new URL(inputURL);

console.log("Protocol:", parsedURL.protocol);
console.log("Hostname:", parsedURL.hostname);
console.log("Pathname:", parsedURL.pathname);

const queryParams = {};
parsedURL.searchParams.forEach((value, key) => {
    queryParams[key] = value;
});

console.log("Query Parameters:", queryParams);