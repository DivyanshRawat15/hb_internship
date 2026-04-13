const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "logs");
const files = fs.readdirSync(dir);
files.forEach((file, index) => {
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, `log_${index + 1}.txt`);
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed to ${newPath}`);
});