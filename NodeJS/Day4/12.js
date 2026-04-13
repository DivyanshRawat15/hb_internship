// 12. Create a CLI program that analyzes a given file path.

const path = require("path");
const p = process.argv[2];
console.log("Normalized:", path.normalize(p));
console.log("Directory:", path.dirname(p));
console.log("File Name:", path.basename(p));
console.log("Extension:", path.extname(p));
console.log("Absolute:", path.resolve(p));