const meet = 'Hello! How are You?';


for (const letter of meet) {
    // console.log(letter);
}



function reversedString(text) {
    let reverse = '';           //notun 1ta srting e rekhe reversed kora
    for (const letter of text) {
        // console.log(letter);
        reverse = letter + reverse;
    }
}

const reversed = reversedString(meet);
console.log(reversed);