// 4. Write a Node.js script that removes duplicate lines from a text file.

const fs = require("fs");
const data = fs.readFileSync("sample.txt", "utf8");
const unique = [...new Set(data.split("\n"))];
fs.writeFileSync("output.txt", unique.join("\n"));
console.log("Duplicates removed.");