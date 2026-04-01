var args = process.argv;
var command = args[2];
/* 18. Numbers Between Two Numbers */
function numbersBetween(start, end) {

    var i = start + 1;

    while (i < end) {
        console.log(i);
        i++;
    }
}
numbersBetween(34, 40);