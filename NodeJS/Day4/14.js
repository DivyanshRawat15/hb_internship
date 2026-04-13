// 14. Create a program that copies a file using streaming.

const fs = require("fs");
const source = process.argv[2];
const dest = process.argv[3];

const stat = fs.statSync(source);
const total = stat.size;
let copied = 0;
const read = fs.createReadStream(source);
const write = fs.createWriteStream(dest);
read.on("data", chunk => {
  copied += chunk.length;
  const percent = ((copied / total) * 100).toFixed(2);
  process.stdout.write(`Progress: ${percent}%\r`);
});
read.pipe(write);