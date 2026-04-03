var args = process.argv;
var command = args[2];
function customShift(array) {
    var firstElement = array[0];
    for (var i = 1; i < array.length; i++) {
        array[i - 1] = array[i];
    }
    array.length = array.length - 1;
    return firstElement;
}
/* Call */
var arr = [10, 20, 30, 40];
console.log(customShift(arr));
console.log(arr);
console.log(customShift(arr));
console.log(arr);