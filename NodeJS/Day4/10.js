// 10. Create an HTTP server that counts how many requests it has received.

const http = require("http");

let count = 0;

const server = http.createServer((req, res) => {

  count++;

  if (req.url === "/") {

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome");

  }

  else if (req.url === "/stats") {

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Total Requests: ${count}`);

  }

  else {

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");

  }

  console.log(`Request received: ${req.url} | Total: ${count}`);

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});