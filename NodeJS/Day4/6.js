// 6. Develop a Node.js program that counts the total number of lines in a large file.

const fs = require("fs");
let lines = 0;
const stream = fs.createReadStream("sample.txt");
stream.on("data", chunk => {
  for (let i = 0; i < chunk.length; i++) {
    if (chunk[i] === 10) lines++;
  }
});
stream.on("end", () => {
  console.log("Total Lines:", lines);
});