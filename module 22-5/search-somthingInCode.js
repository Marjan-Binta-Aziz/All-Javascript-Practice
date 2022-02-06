const products = [
    {id: 6671, name: 'electronics', model: 'hp-elitbook', quantity: 1, price: 54000 },
    {id: 409, name: 'long-dress', model: 'midi-floral', quantity: 1, price: 31000 },
    {id: 341, name: 'bags', model: 'bg-34', quantity: 1, price: 800 },
    {id: 919, name: 'beauty-face', model: 'lipi-4', quantity: 1, price: 500 },
    {id: 3421, name: 'beauty-face', model: 'sun-cream', quantity: 1, price: 600 },
    {id: 7109, name: 'semi-dress', model: 'short-pant', quantity: 1, price: 1600 },
    {id: 7863, name: 'shoes', model: 'boots', quantity: 1, price: 2300 },
];

function searchProducts(products, searchText) {
    const result= [];
    for (const product of products) {
    if (product.name.includes('dress')) {
        result.push(product);
    }
    }
    return result;
}

console.log(searchProducts(products, 'dress'));