const mem = process.memoryUsage();
console.log("RSS:", Math.round(mem.rss / 1024 / 1024), "MB");
console.log("Heap Total:", Math.round(mem.heapTotal / 1024 / 1024), "MB");
console.log("Heap Used:", Math.round(mem.heapUsed / 1024 / 1024), "MB");