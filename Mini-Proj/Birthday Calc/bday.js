const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === "") {
        alert("Please Enter Your Birthday");
    } else {
        const ageObj = getAge(birthdayValue);
        resultEl.innerText = `You are ${ageObj.years} ${ageObj.years > 1 ? "years" : "year"}, ${ageObj.months} ${ageObj.months > 1 ? "months" : "month"}, and ${ageObj.days} ${ageObj.days > 1 ? "days" : "day"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    
    let years = currentDate.getFullYear() - birthdayDate.getFullYear();
    let months = currentDate.getMonth() - birthdayDate.getMonth();
    let days = currentDate.getDate() - birthdayDate.getDate();
    
    // Adjust for negative days
    if (days < 0) {
        months--;
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }
    
    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);