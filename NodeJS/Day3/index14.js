const fs = require("fs");
const dir = process.argv[2];
const files = fs.readdirSync(dir);
files.forEach(file => {
    if(file.endsWith(".txt")){
        console.log(file);
    }
});