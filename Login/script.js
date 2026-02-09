function func(){
  let user = prompt("Who'd there?", "");
if(user === "Admin"){
    let pass = prompt("Password ?", "");
    if(pass === "TheMaster"){
        alert("Welcome!");
    } else if(pass === "" || pass === null){
        alert("Canceled");
    } else {
        alert("Wrong password!");
    }
} else if(user === "" || user === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}
}