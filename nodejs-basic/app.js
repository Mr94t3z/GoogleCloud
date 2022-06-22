// const firstName = process.argv[2];
// const lastName = process.argv[3];
 
// console.log(`Hello ${firstName} ${lastName}`);


// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();


// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();
 
// // fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// // mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);


// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();
 
// // fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// // mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);


// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();
 
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// myEventEmitter.on('coffee-order', makeCoffee);
 
// // Memicu event 'coffee-order' terjadi.
// myEventEmitter.emit('coffee-order', { name: 'Tubruk' });
 
// /**
//  * output:
//  * Kopi Tubruk telah dibuat!
//  */


// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();
 
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// const makeBill = ({ price }) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// }
 
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);
 
// myEventEmitter.emit('coffee-order', { name: 'Good Day', price: 15000 });
 
// /**
//  * output:
//  * Kopi Good Day telah dibuat!
//  * Bill sebesar 15000 telah dibuat!
//  */


// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();
 
// const makeCoffee = (name) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// const makeBill = (price) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// }
 
// const onCoffeeOrderedListener = ({ name, price }) => {
//     makeCoffee(name);
//     makeBill(price);
// }
 
// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
// myEventEmitter.emit('coffee-order', { name: 'Good Day', price: 15000 });
 
// /**
//  * output:
//  * Kopi Good Day telah dibuat!
//  * Bill sebesar 15000 telah dibuat!
//  */


// const fs = require('fs');
 
// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };
 
// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);


// const fs = require('fs');
 
// const data = fs.readFileSync('todo.txt', 'UTF-8');
// console.log(data);


// const fs = require('fs');
 
// const readableStream = fs.createReadStream('./article.txt', {
//     highWaterMark: 10
// });
 
// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
//         // catch the error when the chunk cannot be read.
//     }
// });
 
// readableStream.on('end', () => {
//     console.log('Done');
// });


// const fs = require('fs');
 
// const writableStream = fs.createWriteStream('output.txt');


// const fs = require('fs');
 
// const writableStream = fs.createWriteStream('output.txt');
 
// writableStream.write('Ini merupakan teks baris pertama!\n');
// writableStream.write('Ini merupakan teks baris kedua!\n');
// writableStream.end();


const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');