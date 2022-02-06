
function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log(feet);

var bookInches = 289;
var feet = inchToFeet(bookInches);
console.log(feet);


//miles to km
function milesToKm (miles){
    var km = miles * 1.60934;
    return km;
}
var myInput = 26.2;
var km = milesToKm(myInput);
console.log(km);