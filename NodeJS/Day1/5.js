var args = process.argv;
var command = args[2];
/* 5. Print Even and Odd Numbers Separately */
function printEvenOdd(n) {
    var even = "";
    var odd = "";

    for (var i = 1; i <= n; i++) {
        if ((i & 1) === 0) {
            even = even + i + " ";
        } else {
            odd = odd + i + " ";
        }
    }

    console.log("Odd Numbers: " + odd);
    console.log("Even Numbers: " + even);
}
printEvenOdd(25);