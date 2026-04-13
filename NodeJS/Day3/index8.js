const fs = require("fs");
const message = process.argv[2] || "Application started";
const log = `[${new Date().toISOString().split("T")[0]}] PID:${process.pid}-${message}\n`;
fs.appendFileSync("app.log", log);
console.log("Log written");