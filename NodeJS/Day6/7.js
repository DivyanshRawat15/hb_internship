const fs = require("fs");
const zlib = require("zlib");

const input = fs.createReadStream("data.txt");
const output = fs.createWriteStream("data.txt.gz");

input.pipe(zlib.createGzip()).pipe(output);

output.on("finish", () => {
    console.log("Compression complete. File created: data.txt.gz");
});