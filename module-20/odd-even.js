// function na lekhe 
// const number = 14;
// const reminder = number % 2;
// console.log(reminder == 0);


function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 3333309;
const isMyNumber = isEven(myNumber);
console.log(isMyNumber);


//odd numbers
function isOdd(num){
    if(num % 2 != 0){
        return true;
    }
    return false;
}
const oddNumber = 3773;
const isMynumberOdd = isOdd(oddNumber);
console.log(isMynumberOdd);

