//remove duplicate elementsn from an array

const names = ['a', 'b', 'c', 'd', 'e', 'l', 'f', 'a', 'c', 'g', 'r', 'e',];

function removeDuplicate(names) {
    const unique = []; //string hawa te 1ta defualt value dite hobe
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element);
    // } 
    for(const element of names){
        console.log(element);
        if (unique.indexOf(element) == -1) { //je array ta khujteci oita jodi na thake (amra jani array te kono element na thakle oitar index -1 hoy)
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);



