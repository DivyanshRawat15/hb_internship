var args = process.argv;
var command = args[2];
function customUnshift(array, element) {
    for (var i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = element;
    return array.length;
}
/* Call */
var arr = [2,3,4];
console.log(customUnshift(arr, 1));
console.log(arr);
console.log(customUnshift(arr, 2));
console.log(arr);