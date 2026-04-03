var args = process.argv;
var command = args[2];
function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
/* Call */
var arr = [5,10,15,23,33,56,99];
console.log(arraySum(arr));