var args = process.argv;
var command = args[2];
/* 20. Custom Object Keys */
function getObjectKeys(obj) {

    var keys = [];

    for (var key in obj) {

        if (obj.hasOwnProperty(key)) {
            keys[keys.length] = key;
        }
    }

    return keys;
}
/* Function Call */
var person = {
    name: "Rohan",
    age: 22,
    city: "Vadodara"
};
var result = getObjectKeys(person);
console.log(result);