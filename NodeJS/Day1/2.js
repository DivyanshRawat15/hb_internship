var args = process.argv;
var command = args[2];

/* 2. Display User Details */
function displayUser(name, age, phone) {
    console.log("User Details");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Phone: " + phone);
}
displayUser("Divyansh", 22, 1234567890);