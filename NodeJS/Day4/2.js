// 2. Write a Node.js program that scans all files in a specified directory and determines which file has the largest size.

const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
let largest = { size: 0, file: "" };
fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && stat.size > largest.size) {
      largest = { size: stat.size, file: filePath };
    }
  });
  console.log("Largest File:", path.basename(largest.file));
  console.log("Size:", (largest.size / 1024 / 1024).toFixed(2), "MB");
  console.log("Path:", largest.file);
});