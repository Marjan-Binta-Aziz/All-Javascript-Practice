// var gotJob = false;
// var moneySave = 1500000;
// var hasFlate = true;

// // *---------both condition have to fulfil---------//

// if (gotJob == true && moneySave > 20000) { //both condition have to fulfil
//     console.log('Biye Possible')
// }
// else{
//     console.log('Biye NOT Possible');
// }



// // *---------Three condition have to fulfil---------//

// if (gotJob == true && moneySave > 20000 && hasFlate) { //both condition have to fulfil
//     console.log('Biye Possible')
// }
// else{
//     console.log('Biye NOT Possible');
// }



// // *---------atleast two condition have to fulfil---------//

// if (gotJob == true || moneySave > 20000 && hasFlate) { //both condition have to fulfil
//     console.log('Biye Possible')
// }
// else{
//     console.log('Biye NOT Possible');
// }




var gotJob = false;
var moneySave = 10000;
var hasFlate = true;
var hasBuilding = true;

if((gotJob == true && moneySave > 20000) || hasBuilding == true) {
    console.log("Biye Possible");
}
else{
    console.log("Biye NOT Possible");
}


