// 11. Analyze a large log file using streams.

const fs = require("fs");
let info = 0;
let error = 0;
let warning = 0;
let lines = 0;
const stream = fs.createReadStream("server.log", "utf8");
stream.on("data", chunk => {
  const arr = chunk.split("\n");
  arr.forEach(line => {
    lines++;
    if (line.includes("INFO")) info++;
    if (line.includes("ERROR")) error++;
    if (line.includes("WARNING")) warning++;
  });
});
stream.on("end", () => {
  console.log("Total Lines:", lines);
  console.log("INFO:", info);
  console.log("ERROR:", error);
  console.log("WARNING:", warning);
});