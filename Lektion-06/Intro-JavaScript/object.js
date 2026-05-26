// Ett sätt att organisera eller kapsla information...

// Anonyma objekt...
// Object är basen till allt i JavaScript...
// console.log(Object);

const product = {
  id: 1,
  name: 'Test produkt',
  price: 295.0,
};

console.log(product);

let product_test = product;
product_test.price = 495;

console.log(product_test);

// Dynamiskt lägga till en ny egenskap...
// product.price = 295.0;

// Dynamiskt ta bort en egenskap...
// delete product.id;

// product.id = 2;

// Repetion
const x = 10;
console.log('X =', x);
let y = x;
console.log('Y = ', y);
y = 25;
console.log('Y = ', y);
console.log('X =', x);
