/* 19. You need to build a real-time log monitoring system using Node.js. The system should allow clients to connect to an HTTP endpoint and continuously receive updates from a log file as new data is written to it.
The goal is similar to how tools like tail -f work in Linux, where the terminal shows new lines being appended to a log file in real time.*/

// const http = require("http");
// const fs = require("fs");
// const clients = [];
// http.createServer((req, res) => {
//   if (req.url === "/logs") {
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//       "Connection": "keep-alive"
//     });
//     clients.push(res);
//   }
// }).listen(3000);
// fs.watchFile("app.log", () => {
//   const stream = fs.createReadStream("app.log");
//   stream.on("data", chunk => {
//     clients.forEach(client => client.write(chunk));
//   });
// });



const http = require("http");
const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "app.log");
const clients = [];

let lastSize = 0;

// Create HTTP server
const server = http.createServer((req, res) => {

  if (req.url === "/logs") {

    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Connection": "keep-alive"
    });

    clients.push(res);

    // remove client if connection closes
    req.on("close", () => {
      const index = clients.indexOf(res);
      if (index !== -1) clients.splice(index, 1);
    });

  } else {
    res.writeHead(404);
    res.end("Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// Monitor file changes
fs.watchFile(logFile, () => {

  const stats = fs.statSync(logFile);

  if (stats.size > lastSize) {

    const stream = fs.createReadStream(logFile, {
      start: lastSize,
      end: stats.size
    });

    stream.on("data", chunk => {
      clients.forEach(client => client.write(chunk));
    });

    lastSize = stats.size;
  }

});