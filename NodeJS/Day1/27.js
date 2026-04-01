var args = process.argv;
var command = args[2];
/* 27. Numeric Palindrome */
function isNumericPalindrome(num) {
    var original = num;
    var reversed = 0;
    while (num > 0) {
        var digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return original === reversed;
}
/* Function Call */
console.log(isNumericPalindrome(121));
console.log(isNumericPalindrome(123));