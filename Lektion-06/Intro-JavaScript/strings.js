// String interpolation / string templates...

/* const firstName = 'Kalle';
const lastName = 'Andersson';
 */
// const fullName = firstName + ' ' + lastName;
// Backtick ` skapar en string template...
// ${} string interpolation...
/* const fullName = `${firstName} ${lastName}`;
console.log(fullName); */
// Längd på en sträng...
/* console.log(fullName.length); */

// Använda en sträng som en array av tecken...
/* console.log(fullName[2]); */
// Plocka ut sista tecknet i en sträng
// The old way...
/* console.log(fullName[fullName.length - 1]); */

// The new way...
/* console.log(fullName.at(-1));
console.log(fullName.at(0));
console.log(fullName.at(4)); */

// Hämta ut flera tecken ur en sträng...
// string.slice som plockar ut en sträng ur en annan sträng...
/* console.log(fullName.slice(0, 5));
console.log(fullName.slice(6)); */

// string.substring ...
/* console.log('FullName', fullName.substring(6, 12)); */

// Kontrollera om en sträng börjar med en viss sträng...
/* console.log(fullName.startsWith('Kall'));
console.log(fullName.endsWith('n')); */

// Göra om till stora eller små bokstäver
/* console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase()); */

// Ersätta tecken i en sträng med andra tecken...
/* console.log(fullName.replace('r', '%'));
console.log(fullName.replace(' ', '-'));
console.log(fullName.replace(' ', '')); */

// Söka efter tecken i en sträng...
/* console.log(fullName.includes('ll')); */

const title = 'JavaScript är fantastiskt';
console.log(title);
// Regular expressions
const regex = /javascript/i;
console.log(title.replace(regex, 'React'));
