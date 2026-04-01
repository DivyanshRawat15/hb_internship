var args = process.argv;
var command = args[2];
/* 6. Fibonacci Series */
function fibonacci(n) {
    var a = 0;
    var b = 1;

    for (var i = 0; i < n; i++) {
        console.log(a);
        var temp = a + b;
        a = b;
        b = temp;
    }
}
fibonacci(10);