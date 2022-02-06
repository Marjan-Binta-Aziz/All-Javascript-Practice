// count the number of vowels in a string number

function countVowel(sentence){
    let count = 0;
    for (let i = 0; i < senternce.length; i++) {
    letter = sentence[i].toLowerCase();
    
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        count = count + 1;
        console.log(letter);
    }
    }
    return count;
}
let senternce = 'My name is Marjan';
console.log(countVowel(senternce));




function countVowel(sentence){
    let count = 0;
    let vowels =['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < senternce.length; i++) {
    let letter = sentence[i].toLowerCase();
    
    if (vowels.indexOf(letter) > -1) {
        count = count + 1;
        console.log(letter);
    }
    }
    return count;
}
let senternce = 'My name is Marjan';
console.log(countVowel(senternce));





