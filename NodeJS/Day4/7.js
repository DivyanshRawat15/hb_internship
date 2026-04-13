// 7. Implement a task management system using the events module.

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
let taskQueue = [];
// LISTENERS
eventEmitter.on("task_added", (task) => {
    console.log(`Task Added: ${task}`);
});
eventEmitter.on("task_completed", (task) => {
    console.log(`Task Completed: ${task}`);
});
eventEmitter.on("task_failed", (task, error) => {
    console.log(`Task Failed: ${task} | Error: ${error}`);
});
// FUNCTION TO ADD TASK
function addTask(task) {
    taskQueue.push(task);
    eventEmitter.emit("task_added", task);
    processTask(task);
}
// FUNCTION TO PROCESS TASK
function processTask(task) {
    try {
        // simulate task execution
        if (Math.random() > 0.3) {
            eventEmitter.emit("task_completed", task);
        } else {
            throw new Error("Execution error");
        }
    } catch (error) {
        eventEmitter.emit("task_failed", task, error.message);
    }
}
// ADDING TASKS
addTask("Send Email");
addTask("Generate Report");
addTask("Backup Database");