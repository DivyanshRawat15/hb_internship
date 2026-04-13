// 9. Create a CLI tool that searches for a specific word inside all files within a directory.

const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const word = process.argv[3];
fs.readdir(dir, (err, files) => {
  if (err) {
    console.log("Directory error:", err.message);
    return;
  }
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const data = fs.readFileSync(filePath, "utf8");
    if (data.includes(word)) {
      console.log("Found in:", file);
    }
  });
});