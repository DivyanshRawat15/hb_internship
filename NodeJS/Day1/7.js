var args = process.argv;
var command = args[2];
/* 7. Factorial */
function factorial(n) {
    var result = 1;

    for (var i = 1; i <= n; i++) {
        result = result * i;
    }

    console.log("Factorial: " + result);
}
factorial(10);