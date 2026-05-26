/*
    Date(datatyp) som representerar antalet millisekunder
    som har passerat sedan startdatum för JavaScripts tidsräkning(epoch)
    1970-01-01...
*/

/* 
console.log(new Date());
console.log(Date.now());
let birthDate = new Date('1990-11-17');
console.log(birthDate);
 */

let currentDate = new Date();
console.log(currentDate.toLocaleString('se-SV'));

console.log(currentDate.getDay());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(new Date('1960-01-01'));

const preEpoch = new Date('1960-01-01 20:01:25.222222');
console.log(preEpoch.toLocaleString('se-SV'));
console.log(preEpoch.getMilliseconds());

console.log('Epoch', new Date(0));

let invoiceDate = new Date();
console.log(invoiceDate.toLocaleDateString('se-SV'));
let dueDate = new Date();
dueDate.setDate(invoiceDate.getDate() + 30);
console.log('Förfallodatum', dueDate.toLocaleDateString('se-SV'));
