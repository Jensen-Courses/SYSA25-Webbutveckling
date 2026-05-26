/*
console.log('Hej på dig');
console.info('Hej på dig');
console.warn('Hej på dig');
console.error('Hej på dig');
console.table({ make: 'Fiat', model: 'Uno', modelYear: 2001 });
console.dir({ make: 'Fiat', model: 'Uno', modelYear: 2001 });
*/

// Vi har 3 olika sätt att deklarera variabler i javascript...
// var var x = 10, var y; Placeras i det globala namnutrymmet i JavaScript
// ANVÄND ALDRIG var!!!
// Scope variabler
// let - let x; x = 10
// const - const x = 10; måste vi sätta ett värde direkt till variabeln...

// Best practice - Börja alltid med const...
// Vid behov ändra const till let...

// Demo variabel deklarationer...
/* var badPractice = 'Michael';
console.log(badPractice);
console.log(window);

badPractice = 'Johan';
console.log(window); */

// 1. const
const firstName = 'Susanne';
// firstName = 'Wilma';
console.log(firstName);
// firstName = 'My';

// 2. let
let lastName;
console.log(lastName);
lastName = 'Gustavsson';
console.log(lastName);

console.log(typeof firstName);

let age = 20;
console.log(typeof age);

console.log(age + 1);

console.log(age + 'hej');

const x = 13;
const y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
