var args = process.argv;
var command = args[2];
function findMax(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
/* Call */
var arr = [12, 4, 9, 30, 21];
console.log(findMax(arr));