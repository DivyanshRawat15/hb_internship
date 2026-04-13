const crypto = require("crypto");

var args = process.argv;
var input = args[2];

if (!input) {
    console.log("Please provide a string.");
    process.exit();
}

const hash = crypto
    .createHash("sha256")
    .update(input)
    .digest("hex");

console.log("Input String:", input);
console.log("SHA256 Hash:", hash);