var args = process.argv;
var command = args[2];

/* 4. Print Numbers 1 to N */
function printNumbers(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumbers(10);