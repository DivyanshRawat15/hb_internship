function perc1() {

    // Method returns the element of percent id
    let percent = document.getElementById("percentage").value;
    
    // Method returns the element of num id
    let num = document.getElementById("num").value;
    document.getElementById("Value1")
        .value = (num / 100) * percent;
}

function perc2() {

    // Method returns the element of num1 id
    let num1 = document.getElementById("num1").value;
    
    // Method returns the elements of num2 id
    let num2 = document.getElementById("num2").value;
    document.getElementById("Value2")
            .value = (num1 * 100) / num2 + "%";
}