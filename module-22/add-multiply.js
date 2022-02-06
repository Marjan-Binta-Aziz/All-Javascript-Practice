function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 5;
    const perTableWood = 9;
    const perBedWood = 8;
    //woo dclaculation
    const chairWoodCount = perChairWood * chairQuantity;
    const tableWoodCount = perTableWood * tableQuantity;
    const bedWoodCount = perBedWood * bedQuantity;
    const totalWood = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWood;
}
const totalAmountOfWood = woodCalculator(1, 1, 1);
console.log(totalAmountOfWood);