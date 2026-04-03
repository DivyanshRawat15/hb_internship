var args = process.argv;
var command = args[2];
function countWords(sentence) {
    var count = 1;
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            count++;
        }
    }
    return count;
}
/* Call */
console.log(countWords("JavaScript is powerful"));