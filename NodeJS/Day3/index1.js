const fs = require("fs");
const path = require("path");
const fileName = process.argv[2];
if(!fileName){
    console.log("Please provide a file name");
    process.exit();
}
const folder = path.join(__dirname, "files");
if(!fs.existsSync(folder)){
    fs.mkdirSync(folder);
}
const filePath = path.join(folder, fileName);
fs.writeFileSync(filePath, "File Created using Node JS.");
console.log("File created:", filePath);