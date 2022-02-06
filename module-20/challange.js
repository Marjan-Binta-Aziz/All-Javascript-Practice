// challange 1
function isLeapyear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } 
  else {
    return false;
  }
}
const myYear = 2023;
const isMyYearIsLeapYear = isLeapyear(myYear);
console.log(isMyYearIsLeapYear);

// challage 2
function myAgeisEvenOdd(age) {
  if (age % 2 == 0) {
    return true;
  }
  return false;
}
let myAge = 23;
let isItEvenOdd = myAgeisEvenOdd(myAge);
console.log(isItEvenOdd);

//challange 3
function hourToMinute(hour) {
  hour = hour * 60;
  return hour;
}
let myHour = hourToMinute(3);
console.log(myHour);

for (var i = 10; i >= 1; i--) {
  console.log(i); //output: 0-9
}
