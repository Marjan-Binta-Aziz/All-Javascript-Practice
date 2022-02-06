
// function prime(num) {
//     var Prime = true;
//     if(num == 1){
//         console.log("neither prime nor composite!!");
//     }
//     else if(num > 1){
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 var Prime = false;
//                 break;
//             }
//         }
//         if (Prime) {
//             console.log (num ,'is a prime number');
//         } else {
//             console.log(num ,'is a not prime number');
//         }
//     }
    
//     // check if number is le
// // check if number is less than 1
//     else {
//         console.log("The number is not a prime number.");
//     }
// }
// var check = prime(2);



var n = 13, i, flag = true;

for (i = 2; i <= n - 1; i++)
    if (n % i == 0) {
        flag = false;
        break;
    }
            // Check and display output
    if (flag == true)
        console.log(n + " is prime number");
    else
    console.log(n + " is not prime number");