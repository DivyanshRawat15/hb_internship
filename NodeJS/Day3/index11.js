const fs = require("fs");
const source = process.argv[2];
const destination = process.argv[3];
fs.copyFileSync(source, destination);
console.log("File copied successfully");