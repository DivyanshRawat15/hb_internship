var args = process.argv;
var command = args[2];
/* 23. Custom Reduce */
function customReduce(array, callback, initialValue) {

    var acc = initialValue;

    for (var i = 0; i < array.length; i++) {
        acc = callback(acc, array[i]);
    }

    return acc;
}
/* Callback */
function sum(acc, value) {
    return acc + value;
}
/* Function Call */
var nums = [10,20,30];
var result = customReduce(nums, sum, 0);
console.log(result);