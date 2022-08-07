const products = [
    { name: 'phone', price: 1200 },
    { name: 'laptop', price: 1206 },
    { name: 'watch', price: 120 },
    { name: 'paper', price: 2900 },
    { name: 'smart phone', price: 45 },
    { name: 'land', price: 567 }
]

function search(products, serchText) {
    for (const product of products) {
        const name = product.name;
        if (name.indexof('w') != -1) {
            console.log(name);
        }
    }

}
const match = search(products, 'phone');
console.log(match);