function isLeapyear(year){
    if((year % 2 == 0 && (year % 100 != 0) || (year % 400 == 0))){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2023;
const isMyYearIsLeapYear = isLeapyear(myYear);
console.log(isMyYearIsLeapYear);

const yourYear = 4356;
const isYourIsLeapYear = isLeapyear(yourYear);
console.log(isYourIsLeapYear);