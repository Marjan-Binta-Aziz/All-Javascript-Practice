// const numbers = [45, 777, 88, 10, 90, 45];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i]; // sob gule array er element asscess kore
//     console.log(element);
// }

const array = [45, 777, 88, 10, 90, 45];

let sum = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + element;
}
console.log(sum);


function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const additionOfArray = arrayTotal([6,6,6]);
console.log(additionOfArray);


function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"));


var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count)
