// 15. Write a program that analyzes a directory and generates statistics.

const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
let files = 0;
let folders = 0;
let totalSize = 0;
let largest = { size: 0, file: "" };
function scan(folder) {
  const items = fs.readdirSync(folder);
  items.forEach(item => {
    const full = path.join(folder, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      folders++;
      scan(full);
    } else {
      files++;
      totalSize += stat.size;
      if (stat.size > largest.size) {
        largest = { size: stat.size, file: full };
      }
    }
  });
}
scan(dir);
console.log("Total Files:", files);
console.log("Total Folders:", folders);
console.log("Total Size:", totalSize);
console.log("Largest File:", largest.file);