var args = process.argv;
var command = args[2];
function sumOfDigits(n) {
    var sum = 0;
    while (n > 0) {
        var digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
/* Call */
console.log(sumOfDigits(2674));