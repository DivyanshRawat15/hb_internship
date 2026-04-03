var args = process.argv;
var command = args[2];
function customIndexOf(array, searchElement) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}
/* Call */
var arr = [10, 20, 30, 40];
console.log(customIndexOf(arr, 40));