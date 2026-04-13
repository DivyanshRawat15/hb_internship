const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "files");
const files = fs.readdirSync(dir);
files.forEach(file => {
    const fullPath = path.join(dir, file);
    console.log("File:", file);
    console.log("Path:", fullPath);
});