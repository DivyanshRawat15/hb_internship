const fs = require("fs");
const file = process.argv[2];
const text = fs.readFileSync(file, "utf8");
const words = text.trim().split(/\s+/).length;
const characters = text.length;
const lines = text.split("\n").length;

console.log("Total Words:", words);
console.log("Total Characters:", characters);
console.log("Total Lines:", lines);