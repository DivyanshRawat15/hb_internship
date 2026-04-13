const net = require("net");

const PORT = 4000;
const HOST = "127.0.0.1";

const MESSAGE = "Hello Server, this is the client speaking!";

const client = new net.Socket();

client.connect(PORT, HOST, () => {

    console.log(`Connected to server at ${HOST}:${PORT}`);

    client.write(MESSAGE);

    console.log(`Client sent: "${MESSAGE}"`);

    client.end();
});

client.on("end", () => {
    console.log("Disconnected from server.");
});

client.on("error", (err) => {
    console.log("Client error:", err.message);
});