var bottleColor = 'yellow';
var waterQuanty = 1;
var isFull = false;


///array 
var items = ['bottle', 'mug', 'paper', 'tissu'];
items.indexOf('tissu');
items.push('medicine', 'jel', 'bag');
items.pop();

console.log(items);
console.log(items.length);

//conditions
if(items.length >= 4){
    console.log('too many items');
}
else if(items.length == 4){
    console.log('only 4 items avavible');    
}
else{
    console.log('No items avavialbe');
}