// 5. Create a program that calculates the maximum depth of nested folders within a directory.

const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
function getDepth(folder) {
  let maxDepth = 0;
  const files = fs.readdirSync(folder);
  files.forEach(file => {
    const full = path.join(folder, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      maxDepth = Math.max(maxDepth, 1 + getDepth(full));
    }
  });
  return maxDepth;
}
console.log("Maximum Depth:", getDepth(dir));