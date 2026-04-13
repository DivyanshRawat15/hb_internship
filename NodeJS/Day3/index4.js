const fs = require("fs");
const path = require("path");
const file = process.argv[2];
const filePath = path.join(__dirname, file);
const stats = fs.statSync(filePath);
console.log("File Size: ", stats.size, "bytes");
console.log("Created: ", stats.birthtime);
console.log("Last Modified: ", stats.mtime);