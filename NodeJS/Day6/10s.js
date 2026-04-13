const net = require("net");

const PORT = 3000;
const HOST = "127.0.0.1";

const server = net.createServer((socket) => {

    console.log("Client connected.");

    socket.on("data", (data) => {
        const message = data.toString().trim();
        console.log(`Message from client: ${message}`);
    });

    socket.on("end", () => {
        console.log("Client disconnected.");
    });

    socket.on("error", (err) => {
        console.log("Socket error:", err.message);
    });

});

server.listen(PORT, HOST, () => {
    console.log(`TCP Server listening on ${HOST}:${PORT}`);
});