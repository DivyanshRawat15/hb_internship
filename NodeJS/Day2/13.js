var args = process.argv;
var command = args[2];
function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
/* Call */
var result = swapNumbers(20, 15);
console.log(result[0], result[1]);