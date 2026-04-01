var args = process.argv;
var command = args[2];
/* 26. Longest Palindromic Substring */
function longestPalindrome(str) {
    var longest = "";
    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            var substring = "";
            for (var k = i; k <= j; k++) {
                substring += str[k];
            }
            if (isPal(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
}
function isPal(s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
/* Function Call */
var result = longestPalindrome("dkfabababafkd dsrhetj");
console.log(result);