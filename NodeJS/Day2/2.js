var args = process.argv;
var command = args[2];
function customIncludes(array, searchElement) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true;
        }
    }
    return false;
}
/* Call */
var nums = [5, 8, 11];
console.log(customIncludes(nums, 8));