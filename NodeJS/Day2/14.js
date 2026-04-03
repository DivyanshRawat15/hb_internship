var args = process.argv;
var command = args[2];
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
/* Call */
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));