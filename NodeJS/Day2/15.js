var args = process.argv;
var command = args[2];
function countVowelsConsonants(str) {
    var vowels = 0;
    var consonants = 0;
    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        if (
            ch === "a" || ch === "e" || ch === "i" ||
            ch === "o" || ch === "u" ||
            ch === "A" || ch === "E" || ch === "I" ||
            ch === "O" || ch === "U"
        ) {
            vowels++;
        } else {
            consonants++;
        }
    }
    console.log("Vowels:", vowels);
    console.log("Consonants:", consonants);
}
// Call
countVowelsConsonants("JavaScript");