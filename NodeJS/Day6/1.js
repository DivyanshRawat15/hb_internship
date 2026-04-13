const os = require("os");

console.log("CPU Architecture:", os.arch());
console.log("Platform:", os.platform());
console.log("Total Memory (bytes):", os.totalmem());
console.log("Free Memory (bytes):", os.freemem());
console.log("Hostname:", os.hostname());