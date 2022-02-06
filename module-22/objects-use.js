const phones = [
    {model: 'sumsang j6', price: 59000, camera: 13, memory: 256, year: 2015},
    {model: 'Nokia 110', price: 30000, camera: 5, memory: 4, year: 2000},
    {model: 'Walton', price: 10000, camera: 10, memory: 55, year: 2003},
    {model: 'Oppo 5s', price: 23000, camera: 30, memory: 128, year: 2001},
    {model: 'xaomi 3', price: 55000, camera: 24, memory: 100, year: 2002},
    {model: 'blackbarry', price: 5000, camera: 23, memory: 120, year: 1990},
    
]

let cheapest = phones[0]
for (const phone of phones) { //joto gulo phnoe ase tadr modde akta kore nawa
    if (phone.price < cheapest.price) {
        cheapest.price = phone.price;
        console.log(phone.model, '=', cheapest.price);

    }
}
