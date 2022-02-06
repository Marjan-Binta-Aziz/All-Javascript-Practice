function largestElements(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        } 
    }
    return largest;
}
const richMan = [-3, -89, -90];
const big = largestElements(richMan);
console.log(big);


//smallest numbers
function smallestElements(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        } 
    }
    return smallest;
}
const array = [5, 1, 6];
const small = smallestElements(array);
console.log(small);


