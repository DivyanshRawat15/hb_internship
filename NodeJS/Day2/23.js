var args = process.argv;
var command = args[2];
function rotateRight(array, n) {
    var length = array.length;
    for (var k = 0; k < n; k++) {
        var last = array[length - 1];
        for (var i = length - 1; i > 0; i--) {
            array[i] = array[i - 1];
        }
        array[0] = last;
    }
    return array;
}
/* Call */
var arr = [1,2,3,4,5];
console.log(rotateRight(arr, 4));