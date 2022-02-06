const business = 19500;
const minister = 3560;
const army = 8900;

// var max = Math.max(business, minister, army);

// console.log('Largest is =', max);


// function findLargest(first, second) {
//     if (first > second) {
//         return first;
//     }
//     else{
//         return second;
//     }    
// }
// const largest = findLargest(3845, 554);
// console.log(largest);

// task 1
// function findLargestBetween3(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     }
//     else if (num2 > num3 && num2 > num3) {
//         return num2;
//     } 
//     else {
//         return num3;
//     }
    
// }
// const largestOne = findLargestBetween3(100, 87, 80);
// console.log(largestOne);

// var largest = Math.max(7, 5, 10);
// console.log(largest);


// task 2

function findSmallestBeteen3(number1, number2, number3) {
    if (number1 < number2 && number1 < number3) {
        return number1;
    }
    else if (number2 < number3 && number2 < number3) {
        return number2;
    } else {
        return number3;
    }
    
}
const smlastNumber = findSmallestBeteen3(607,90,390);
console.log(smlastNumber);


var smallest = Math.min(45, 90, 76);
console.log(smallest);
