// 17. Create an HTTP endpoint that counts text statistics.

// const http = require("http");
// http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/count") {
//     let data = "";
//     req.on("data", chunk => {
//       data += chunk;
//     });
//     req.on("end", () => {
//       const words = data.split(/\s+/).length;
//       const lines = data.split("\n").length;
//       const chars = data.length;
//       res.end(JSON.stringify({ words, lines, chars }));
//     });
//   }
// }).listen(5000);


// const http = require("http");

// http.createServer((req, res) => {

//   if (req.method === "POST" && req.url === "/count") {

//     let data = "";

//     req.on("data", chunk => {
//       data += chunk;
//     });

//     req.on("end", () => {

//       const words = data.trim().split(/\s+/).filter(Boolean).length;
//       const lines = data.split("\n").length;
//       const chars = data.length;

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ words, lines, chars }));

//     });

//   } else {

//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");

//   }

// }).listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });



const http = require("http");

http.createServer((req, res) => {

  if (req.method === "POST" && req.url === "/count") {

    let data = "";

    req.on("data", chunk => {
      data += chunk;
    });

    req.on("end", () => {

      const words = data.trim().split(/\s+/).filter(Boolean).length;
      const lines = data.split("\n").length;
      const chars = data.length;

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ words, lines, chars }));

    });

  } else {

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");

  }

}).listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});