const dns = require("dns");

var args = process.argv;
var domain = args[2];

if (!domain) {
    console.log("Please provide a domain name.");
    process.exit();
}

dns.lookup(domain, (err, address) => {
    if (err) {
        console.log("Error:", err.message);
        return;
    }

    console.log(`IP Address for ${domain}: ${address}`);
});