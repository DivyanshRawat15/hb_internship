var args = process.argv;
var command = args[2];
/* 21. Custom Trim */
function customTrim(str) {

    var start = 0;
    var end = str.length - 1;

    while (str[start] === " ") start++;
    while (str[end] === " ") end--;

    var result = "";

    for (var i = start; i <= end; i++) {
        result = result + str[i];
    }

    return result;
}
/* Function Call */
var text = "   Hello World   ";
var output = customTrim(text);
console.log(output);