// const arr = new Array(1, 2, 3);
// console.log(arr);

// const arr2 = [4, 5, 6];
// console.log(arr2);

// const users = [
//     { id: 1, name: 'Test', age: 20 },
//     { id: 2, name: 'Ivo', age: 23 },
// ];

// console.log(users[0]);
// console.log(users.length);

// const fantasticElems = [1, "qwerty", { name: "User1" }];

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const months1 = Array.from(months);
// const months2 = [...months];

// for(let i = 0; i < months.length; i++) {
//     console.log(months[i]);
// }

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for(let i = 0; i < users.length; i++) {
//     document.write(`
//     <article>
//         <h2>${users[i].name}</h2>
//         <p>Age: ${users[i].age}</p>
//     </article>
//     `);
// }

// document.write('<ol>');
// for(let i = 0; i < months.length; i++) {
//     document.write(`<li>${months[i]}</li>`);
// }
// document.write('</ol>');

// const numbers = [11, 40, -8, 20, 55];
// function arraySum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(arraySum(numbers));

// function avgAge(users) {
//     let sumAge = 0;
//     for(let i = 0; i < users.length; i++) {
//         sumAge += users[i].age;
//     }
//     return sumAge / users.length;
// }
// console.log(avgAge(users));

// const numbers = [1, 3, 4, 6, 8];
// for(const index in numbers) {
//     console.log(index, ':', numbers[index]);
// }

// for(let element of numbers) {
//     console.log(element);
// }

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// document.write('<ol>');
// for(const month of months) {
//     document.write(`<li>${month}</li>`);
// }
// document.write('</ol>');

// const months = ['January', 'February', 'March'];
// console.log(months);

// months.push('April');
// console.log(months);

// const arrLength = +prompt('Input array length');
// const arr = [];
// for(let i = 0; i < arrLength; i++) {
//     const elem = +prompt(`Input ${i} element`);
//     arr.push(elem);
// }
// console.log(arr);

// const lastEl = arr.pop();
// console.log(lastEl);
// console.log(arr);

// const months = ['January', 'February', 'March'];
// const monthsCopy = months.slice();

// const monthsPart = months.slice(0, 2);
// console.log(monthsPart);

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const deleteMonth = months.splice(0, 2);
// const deleteMonth2 = months.splice(9, 1);
// console.log(deleteMonth2);

// const a = [1, 2, 3, 4];
// const b = [7, 8, 9];

// const c = a.concat(b);
// const deletedMonth2 = months.splice(11, 1).concat(months.splice(0, 2));

// const d = [...a, ...b];
// const deletedMonth3 = [...months.splice(11, 1), ...months.splice(0, 2)];

function findIndexById(array, id) {
    for(const index in array) {
        if(array[index].id === id) {
            return index;
        }
    }
}

// let messages = [
//   {
//     id: 1,
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     createdAt: "2024-05-01",
//   },
//   {
//     id: 2,
//     body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     createdAt: "2024-05-02",
//   },
//   {
//     id: 3,
//     body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     createdAt: "2024-05-03",
//   },
//   {
//     id: 4,
//     body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     createdAt: "2024-05-04",
//   },
//   {
//     id: 5,
//     body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
//     createdAt: "2024-05-05",
//   },
//   {
//     id: 6,
//     body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
//     createdAt: "2024-05-06",
//   },
// ];

// const newMessages = [
//   {
//     id: 7,
//     body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
//     createdAt: "2024-05-07",
//   },
//   {
//     id: 8,
//     body: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
//     createdAt: "2024-05-08",
//   },
//   {
//     id: 9,
//     body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
//     createdAt: "2024-05-09",
//   },
// ];

// messages = [...messages, ...newMessages];
// console.table(messages);

// const deletedMessageIndex = findIndexById(messages, 2);
// messages.splice(deletedMessageIndex, 1);
// console.table(messages);



// function functionWithCallback(cb, value) {
//     cb(value);
// }

// functionWithCallback(alert, 'Hello');
// functionWithCallback(console.log, 'Hello with console log');

// const arr = [1, 2, 3, 4];

// function printElement(currentValue, index, array) {
//     console.log('currentValue:', currentValue);
//     // console.log('index:', index);
//     // console.log('array:', array);
// }

// const printElement = (currentValue, index, array) => {
//     console.log('currentValue:', currentValue);
// }

// arr.forEach(printElement);

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// function addHtml(month) {
//     document.write(`<li>${month}</li>`);
// }

// document.write('<ol>');
// months.forEach(addHtml)
// document.write('</ol>');

// const arr = [1, 2, 3, 4];
// function toSqr(currentValue, index, array) {
//     return currentValue ** 2;
// }
// const arr2 = arr.map(toSqr);
// console.log(arr2);

// function changeSign(currentValue, index, array) {
//     return -1 * currentValue ;
// }
// const arr3 = arr.map(changeSign);
// console.log(arr3);

// function changeSign(currentValue, index, array) {
//     return -1 * currentValue ;
// }
// const arr4 = arr.map((currentValue) => -currentValue);
// console.log(arr4);

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const months1 = ['<li>January</li>', '<li>February</li>', '<li>March</li>'];
// const months2 = months.map((month => `<li>${month}</li>`));
// document.write(`<ol>${months2.join('')}</ol>`);

// const users = [
//     { id: 1, name: 'Test', age: 15 },
//     { id: 2, name: 'Ivo', age: 30 },
// ];

// const names = users.map(user => user.name);
// console.log(names);

// const numbers = [0, -8, 6, -10, 5, 11];
// const oddNumbers = numbers.filter(number => number % 2 === 1);
// console.log(oddNumbers);

// const adultUsers = users.filter(user => user.age >= 18);
// console.log(adultUsers);

// const foundIndex = numbers.findIndex(number => number === 6);
// console.log(foundIndex);

// const foundUserIndex = users.findIndex(user => user.id === 1);
// if(foundUserIndex !== -1) {
//     users[foundUserIndex].age = 16;
//     console.log(users);

//     const updatedData = { age: 16 };
//     users[foundUserIndex] = { ...users[foundUserIndex], ...updatedData };
//     console.log(users);
// }