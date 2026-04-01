var args = process.argv;
var command = args[2];
/* 19. Custom Map */
function customMap(array, callback)
{
    var result = [];
    for (var i = 0; i < array.length; i++){
        result[i] = callback(array[i], i);
    } 
    return result;
}
/* Callback function */
function doubleValue(element, index) {
    return element * 2;
}
/* Function Call */
var numbers = [1, 2, 3, 4, 5];
var output = customMap(numbers, doubleValue);
console.log(output);