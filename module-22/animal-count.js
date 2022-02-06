/* perMile e 10aniles (1-10)
11 miles e gele 50animals pawa jabe */

// let totalAnimals = 0;
function animalesCount(miles) {
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }
    else if(miles <= 20) {
        const first10 = 10 * 10; //10 miles porjonto 10ta kore animals dekbe
        const restMiles = miles - 10;  //13 -10
        const countAfter10 = restMiles * 50; //
        const totalAnimalAfter10 = countAfter10 + first10;
        return totalAnimalAfter10;
    }
    else {
        const first10 = 10 * 10; //10 miles porjonto 10ta kore animals dekbe
        const secound10 = 10 * 50;
        const restMilesAfter20 = miles - 20;  //21 - 20
        const countAfter20 = restMilesAfter20 * 100; //
        const totalAnimalAfter20 = countAfter20 + secound10 + first10;
        return totalAnimalAfter20;
    }
}

const totalAnimals = animalesCount(21);
console.log(totalAnimals);

let sum=0; 
for( let i = 0; i<=3;i++){ 
    sum = sum + i; 
}
console.log(sum);