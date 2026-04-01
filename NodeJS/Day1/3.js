var args = process.argv;
var command = args[2];

/* 3. Calculate Marks and Percentage */
function calculateMarks(total, count) {
//    var total = 0;
 //   var count = 0;
    for (var i = 3; i < args.length; i++) {
        total = total + Number(args[i]);
        count++;
    }
    var percentage = total / count;
    console.log("Total Marks: " + total);
    console.log("Percentage: " + percentage);
}
calculateMarks(257, 3);