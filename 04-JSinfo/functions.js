// Factorial Function
const fact = function fac(n){
    return n < 2 ? 1: n*fac(n-1);
};
fact(6);

// Square Function
const square = function (number){
    return number * number;
};
square(4);