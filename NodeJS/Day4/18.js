// 18. Write a program that scans a directory and counts files by extension.

const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const stats = {};
fs.readdirSync(dir).forEach(file => {
  const ext = path.extname(file);
  stats[ext] = (stats[ext] || 0) + 1;
});
console.log(stats);