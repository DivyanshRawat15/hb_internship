const fs = require("fs");
const path = require("path");
const fileName = process.argv[2];
if(!fileName){
    console.log("Provide File Name");
    process.exit();
}
const filePath = path.join(__dirname, fileName);
const content = fs.readFileSync(filePath, "utf8");
console.log(content);