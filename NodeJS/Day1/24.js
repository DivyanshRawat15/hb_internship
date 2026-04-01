var args = process.argv;
var command = args[2];
/* 24. Custom Join */
function customJoin(array, separator) {
    if (separator === undefined) separator = ",";
    var result = "";
    for (var i = 0; i < array.length; i++) {
        result = result + array[i];
        if (i < array.length - 1) {
            result = result + separator;
        }
    }
    return result;
}
/* Function Call */
var arr = ["JS","Node","React"];
var output = customJoin(arr, "-");
console.log(output);