// 0, 1, 1, 2, 3
// 3rd = 2nd+1st
// 4th = 3rd+2nd
// n = n-1 , n-2


const fibo = [0, 1];
for (let i = 0; i < 70; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);