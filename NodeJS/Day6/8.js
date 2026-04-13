const net = require("net");

const server = net.createServer((socket) => {

    console.log("Client connected");

    socket.write("Hello Client");

    socket.on("end", () => {
        console.log("Client disconnected");
    });

});

server.listen(4000, () => {
    console.log("TCP Server listening on port 4000...");
});