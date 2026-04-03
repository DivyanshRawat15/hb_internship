var args = process.argv;
var command = args[2];
function secondLargest(array) {
    var largest = -Infinity;
    var second = -Infinity;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            second = largest;
            largest = array[i];
        } else if (array[i] > second && array[i] !== largest) {
            second = array[i];
        }
    }
    return second;
}
/* Call */
var arr = [10, 50, 90, 20, 40, 30];
console.log(secondLargest(arr));