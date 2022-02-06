function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}
var firstFactorial = factorial(7);
console.log("factorial of 7", firstFactorial);