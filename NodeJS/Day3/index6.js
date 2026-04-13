const path = require("path");
const inputPath = process.argv[2];
console.log("File Name:", path.basename(inputPath));
console.log("File Extension:", path.extname(inputPath));
console.log("Directory:", path.dirname(inputPath));
console.log("Absolute Path:", path.resolve(inputPath));