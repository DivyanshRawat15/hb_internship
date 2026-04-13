const fs = require("fs");
const path = require("path");
const count = parseInt(process.argv[2]);
const folder = path.join(__dirname, "logs");
if(!fs.existsSync(folder)){
    fs.mkdirSync(folder);
}
for (let i=1;i<=count;i++){
    const filePath = path.join(folder, `logs${i}.txt`);
    fs.writeFileSync(filePath, `Log file ${i}`);
}
console.log(count, "files created");