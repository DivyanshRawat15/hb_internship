const fs = require("fs");
const folders = [
    "project",
    "project/src",
    "project/logs",
    "project/data",
    "project/config"
];
folders.forEach(folder => {
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }
});
console.log("Project Structure Created");