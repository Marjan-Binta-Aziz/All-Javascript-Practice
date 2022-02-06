/* const products = [
    {id: 6671, name: 'electronics', model: 'hp-elitbook', quantity: 1, price: 54000 },
    {id: 409, name: 'dress', model: 'midi-floral', quantity: 1, price: 31000 },
    {id: 341, name: 'bags', model: 'bg-34', quantity: 1, price: 800 },
    {id: 919, name: 'beauty-face', model: 'lipi-4', quantity: 1, price: 500 },
    {id: 3421, name: 'beauty-face', model: 'sun-cream', quantity: 1, price: 600 },
    {id: 7109, name: 'dress', model: 'short-pant', quantity: 1, price: 1600 },
    {id: 7863, name: 'shoes', model: 'boots', quantity: 1, price: 2300 },
];

let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;

}
console.log(totalPrice); */

const products = [
    {id: 409, name: 'dress', model: 'midi-floral', quantity: 1, price: 3100 },
    {id: 341, name: 'bags', model: 'bg-34', quantity: 2, price: 800 },
    {id: 919, name: 'beauty-face', model: 'lipi-4', quantity: 1, price: 500 },
    {id: 3421, name: 'beauty-face', model: 'sun-cream', quantity: 2, price: 600 },

];

let totalPrice = 0; //jehetu amdr value bar bar change kora lagbe tai aita loop er bahire  dore nite hobe
for (const product of products) {
    totalPrice = totalPrice + (product.price  * product.quantity ) ;
}
console.log(totalPrice);