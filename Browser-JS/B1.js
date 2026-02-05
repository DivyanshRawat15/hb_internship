// DOM
function Hi(){
    alert("Hello!");
}
window.Hi();
alert(wondow.innerHeight);
document.body.style.background = "lightblue";
setTimeout(() => document.body.style.background = "", 3000);


// BOM
alert(location.href);
if(confirm("Go to Wikipedia!")) {
    location.href = "https://www.wikipedia.org/";
}
navigator.userAgent;
navigator.platform;

// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
typeof letters; 
letters instanceof Set;  // Returns true