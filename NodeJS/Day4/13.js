// 13. Create a program that simulates file operations using events.

const fs = require("fs");
const EventEmitter = require("events");
const emitter = new EventEmitter();
function log(message) {
  fs.appendFileSync("file.log", `[${new Date().toLocaleTimeString()}] ${message}\n`);
}
emitter.on("file_created", f => log(`File Created: ${f}`));
emitter.on("file_deleted", f => log(`File Deleted: ${f}`));
emitter.on("file_updated", f => log(`File Updated: ${f}`));
emitter.emit("file_created", "report.txt");
emitter.emit("file_updated", "report.txt");
emitter.emit("file_deleted", "report.txt");