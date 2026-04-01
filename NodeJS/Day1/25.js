var args = process.argv;
var command = args[2];
/* 25. Check Palindrome String */
function isPalindrome(str) {
    var clean = "";
    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        if (
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= 'a' && ch <= 'z') ||
            (ch >= '0' && ch <= '9')
        ) {
            if (ch >= 'A' && ch <= 'Z') {
                ch = String.fromCharCode(ch.charCodeAt(0) + 32);
            }
            clean = clean + ch;
        }
    }
    var left = 0;
    var right = clean.length - 1;
    while (left < right) {
        if (clean[left] !== clean[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
/* Function Call */
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Hello"));