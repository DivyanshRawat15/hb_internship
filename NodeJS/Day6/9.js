const crypto = require("crypto");

function generatePassword(length = 24) {
    return crypto.randomBytes(length).toString("base64").slice(0, length);
}

const password = generatePassword();

console.log("Generated Password:", password);