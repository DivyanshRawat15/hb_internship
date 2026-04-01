var args = process.argv;
var command = args[2];
/* 22. Custom Filter */
function customFilter(array, callback) {
    var result = [];
    var index = 0;
    for (var i = 0; i < array.length; i++) {

        if (callback(array[i])) {
            result[index] = array[i];
            index++;
        }
    }
    return result;
}
/* Callback */
function isEven(num) {
    return num % 2 === 0;
}
/* Function Call */
var numbers = [1,2,3,4,5,6];
var output = customFilter(numbers, isEven);
console.log(output);