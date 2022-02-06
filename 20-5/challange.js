// function celciusToFarenhite(celcius){
//     var farenhite = (celcius * 9/5) + 32;
//     return farenhite;
// }
// var myFarenhite = celciusToFarenhite(37);
// console.log(myFarenhite);


// function farenhiteTocielcius(farenhite){
//     var celcius = (farenhite-32) * 5/9;
//     return celcius;
// }
// var myCelcius = farenhiteTocielcius(37);
// console.log(myCelcius);

// function grade(marks){
//     if (marks >= 90 && marks <= 100){
//         console.log('You grade is A');
//     }
//     else if(marks >= 70 && marks <= 79){
//         console.log('Your grade is B');
//     }
//     else if(marks >= 60 && marks <= 69){
//         console.log('Your grade is C');
//     }
//     else if(marks >= 50 && marks <= 59){
//         console.log('Your grade is D');
//     }
//     else if(marks >= 0 && marks <= 49){
//         console.log('Your grade is F');
//     }
//     else{
//         console.log('Wrong Number'); // for error handalling
//     }
// }
// grade(45);

// function gradingSystem(grade) {
//     switch (true) {
//         case grade >= 90 && grade <= 100:
//             console.log('You grade is A');
//             break;
//         case grade >= 70 && grade <= 79:
//             console.log('Your grade is B');
//             break;
//         case grade >= 60 && grade <= 69:
//             console.log('Your grade is C');
//             break;
//         case grade >= 50 && grade <= 59:
//             console.log('Your grade is D');
//             break;
//         case grade >= 0 && grade <= 49:
//             console.log('Your grade is F');
//             break;
//         default:
//             console.log('Wrong Number'); // for error handalling
//             break;
//     }
    
// }
// gradingSystem(99);


//Basic Javascript

//1
// const name = 'marjan';
// let age = 23;
// var price1 = 349;

// //2
// for (let i = 1; i <= 100; i++){
//     console.log(i);  
// }
// var i = 1;
// while (i <= 100) {
//     console.log(i);  
//     i++;
// }


//3 
// let i = 50;
// while (i >= 80) {
//     if (i % 2 ==1) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

//4

// function additionOf3Numbers(num1, num2, num3) {
//     var result = num1 + num2 + num3;
//     return result;
// }
// var addition = additionOf3Numbers(34, 67, 78);
// console.log(addition);

function intarestCount(amount, month, percent) {
    var intarest = percent / 100;
    var result = amount * month * intarest;
    return result;
}
var myIntarest = intarestCount(10,8,20);
console.log(myIntarest);
