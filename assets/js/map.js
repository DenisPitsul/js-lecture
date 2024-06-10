'use strict';

// const map1 = new Map();

// // map.name = 'Test';
// map1.set('name', 'Test');
// map1.set('surname', 'Testovich');
// map1.set('age', 20).set('email', 'qwerty@com');

// console.log('map ->', map1);

// const map2 = new Map([
//     ['age' , 30],
//     ['isMale', true]
// ]);

// console.log(map1.get('age'));

// map2.delete('isMale');

// console.log(map1.has('age'));

// map2.clear();

// map1.forEach((value, key, map) => {
//     console.log(`map1[${key}] = ${value}`);
// });
// map1.set('age', 21);

// const phoneBook = new Map();

// phoneBook.set('+380960000000', "Test1")
//     .set('+380981234567', "Test2");

// console.log(phoneBook.has('+380981234567'));

// for (const prop of phoneBook) {
//     console.log('prop ->', prop);
// }

// console.log([...phoneBook.keys()]);
// console.log([...phoneBook.values()]);
// console.log([...phoneBook.entries()]);

// const phoneBookCopy = phoneBook;
// const phoneBookCopy1 = new Map([...phoneBook.entries()]);

// const o2 = {
//     ivo1: 'tel1',
//     ivo2: 'tel2',
// }

// const map = new Map(Object.entries());

// const vocabulary = new Map();
// vocabulary.set('dog', 'собака');
// vocabulary.set('cat', 'кіт');
// vocabulary.set('run', 'бігти');

// const engPhrase = 'dog run white cat';

// function translatePhrase(engPhrase) {
//     return engPhrase.split(' ')
//         .map(word => vocabulary.has(word) ? vocabulary.get(word) : word)
//         .join(' ');
// }

// const ukrPhrase = translatePhrase(engPhrase);
// console.log(ukrPhrase);

// const user = { firstName: 'Test', lastName: 'Testovich' };

// const usersMessages = new Map();

// usersMessages.set(user, [
//     { id: 1, body: 'blablabla1' },
//     { id: 2, body: 'blablabla2' },
// ]);
// console.log(usersMessages.get(user));

// const usersWithMessages2 = [
//     { id: 1, name: 'Test1', message: 'hello', date: new Date() },
//     { id: 1, name: 'Test1', message: 'how are you', date: new Date() },
//     { id: 2, name: 'Test2', message: 'hi)', date: new Date() },
//     { id: 2, name: 'Test2', message: 'fine)', date: new Date() },
// ];

// const users = [];
// usersWithMessages2.forEach(um => {
//     if(!users.find(u => u.id === um.id)) {
//         users.push({ id: um.id, name: um.name });
//     }
// });

// const uToM = new Map();

// users.forEach(u => {
//     uToM.set(
//         u, 
//         usersWithMessages2
//             .filter(uvm => uvm.id === u.id)
//             .map(um => ({ message: um.message, date: um.date }))
//         );
// });

// console.log(uToM);