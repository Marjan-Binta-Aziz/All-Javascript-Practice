// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i <= number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(8);
// console.log(myFactorial);


function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const myFactorial = getFactorial(8);
console.log(myFactorial);

//for loo reverse

function getFactorial2(num){
    let fact = 1;
    for(i = num; i >= 1; i--){
        fact = fact * i;
    }
    return fact;
}
var myFact = getFactorial2(3);
console.log(myFact);