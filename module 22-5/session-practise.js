/* mular dam
 for first 2 kg - 30 tk per kg
 foe more than 2kg - 25tk per kg */

/* function mularDam(quantity) {

    //error handaling
    if (typeof quantity != "number") {
        return "please enter a valid quantity";
    }
    if (quantity <= 0) {
        return "please enter a valid quantity";
    }
    if (quantity >= 20) {
        return "please want less than that";
    }
    
    
    let price = 0;
    if (quantity <= 2) {
        price = quantity * 30;
    } 
    else {
        price = quantity * 25;
    }
    return price;
}

console.log(mularDam(4));
 */


/* calculate electricity Bill
for first 100unit - 5tk per unit
for more tha 100unit 6tk per unit
for more tha 200unit 7tk per month */

function electricityBillCount(unit) {
    let bill = 0;
    if (unit <= 100) {
        bill = unit * 5;
    }
    else if(unit > 200){
        let fist100Bill = 100 * 5;
        let secondBill = 100 * 6;
        let remainBill = (unit -200) * 7;
        bill = fist100Bill + secondBill + remainBill;
    }
    else if (unit > 100) {
        let first100 = 100 * 5;
        restUnit = (unit - 100) * 6;
        bill = first100 + restUnit ;
    } 
    return bill;
}

const unitOfPerMonth = 99;
console.log(electricityBillCount(unitOfPerMonth));


/* prothom 100 100*5
(200 -100) * 6
(250 -200) * 7 */