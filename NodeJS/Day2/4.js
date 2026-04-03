var args = process.argv;
var command = args[2];
function removeDuplicates(array) {
    var result = [];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        var duplicate = false;
        for (var j = 0; j < index; j++) {
            if (result[j] === array[i]) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            result[index] = array[i];
            index++;
        }
    }
    return result;
}
/* Call */
var arr = [1,2,3,2,4,1,5];
console.log(removeDuplicates(arr));