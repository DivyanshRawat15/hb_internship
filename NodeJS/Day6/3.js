const https = require("https");

const url = "https://jsonplaceholder.typicode.com/todos/1";

https.get(url, (res) => {

    let data = "";

    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error:", err.message);
});