// if
// const isOnline = false;
// if (isOnline) {
//     document.write(`<p>User is online</p>`);
// } else {
//     document.write(`<p>User is offline</p>`);
// }

// const isEnoughMoney = true;
// if (isEnoughMoney) {
//     console.log('Операцію схвалено)');
// } else {
//     console.log('Операцію відхилено(');
// }

// const isOnline = true;
// let color = null;
// let status = null;
// if (isOnline) {
//     color = 'green';
//     status = 'online'
// } else {
//     color = 'red';
//     status = 'offline'
// }
// document.write(`<p>User is <span style="color:${color}">${status}</span></p>`);

// const isOnline = true;
// const color = isOnline ? 'green' : 'red';
// const status = isOnline ? 'online' : 'offline';
// document.write(`<p>User is <span style="color:${color}">${status}</span></p>`);

// const age = 19;
// if (age >= 18) {
//     document.write('<p>You have full access</p>')
// } else {
//     document.write('<p></p>You have not full access</p>')
// }

// const RIGHT_NUMBER = 2;
// const guessNumber = +prompt('Input number:');
// if (RIGHT_NUMBER === guessNumber) {
//     document.write('<p>You guessed number</p>');
// } else {
//     document.write('<p>You did not guess number</p>');
// }

// const isRightNumber = RIGHT_NUMBER === guessNumber;
// document.write(`You ${isRightNumber ? '' : 'did not '}guess${isRightNumber ? 'ed' : ''} number`);

// const firstNumber = +prompt('Input first number:');
// const secondNumber = +prompt('Input second number:');
// const operation = prompt('Input operator (+,-):');
// if(operation === '+') {
//     console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// } else {
//     console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// }
// console.log(operation === '+' ? + firstNumber + secondNumber : firstNumber - secondNumber);

// const firstNumber = +prompt('Input first number:');
// const secondNumber = +prompt('Input second number:');
// const operation = prompt('Input operator (+,-):');
// if(operation === '+') {
//     console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// } else if(operation === '-') {
//     console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// } else if(operation === '*') {
//     console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// } else {
//     console.log(`${operation} is unsupported operation`)
// }

// const age = 20;
// if(age < 18) {
//     alert('У вас обмежений доступ для послуг порталу')
// }
// document.write('<p>Вітаємо на потралі</p>');

// const age1 = Number(prompt('Input age', '0'));
// if(Number.isInteger(age1)) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect. Input again.')
// }
// if (!Number.isInteger(age1)) {
//     console.log('Incorrect. Input again.')
// }

// console.group('Таблиця істинності &&:');
// console.log('true && true :>> ', true && true); // => true, якщо всі true
// console.log('false && false :>> ', false && false);
// console.log('true && false :>> ', true && false);
// console.log('false && true :>> ', false && true);
// console.groupEnd();

// console.group('Таблиця істинності ||:');
// console.log('true || true :>> ', true || true);
// console.log('false || false :>> ', false || false); // => false, якщо всі false
// console.log('true || false :>> ', true || false);
// console.log('false || true :>> ', false || true);
// console.groupEnd();

// const isMale = false;
// const isMarried = false;
// const name = 'Test';
// if(isMale) {
//     document.write(`<p>Hello Mr ${name}</p>`);
// } else if (!isMale && isMarried) {
//     document.write(`<p>Hello Mrs ${name}</p>`);
// } else {
//     document.write(`<p>Hello Ms ${name}</p>`);
// }
// let appeal = '';
// if(isMale) {
//     appeal = 'Mr';
// } else if (isMarried) {
//     appeal = 'Mrs';
// } else {
//     appeal = 'Ms';
// }
// document.write(`<p>Hello ${appeal} ${name}</p>`);

// const age = 25;
// const price = 500;
// let discount = 0;
// if (age < 18 || age >= 65) {
//     discount = 100;
// }
// const resultPrice = price - discount;
// document.write(`<p>${resultPrice}</p>`);

// const day = 'friday';
// const date = 13;
// if(day === 'friday' && date === 13) {
//     document.write('<p>You have discount 10%</p>');
// }

// let value;
// if(value !== undefined && value !== null) {
//     console.log('Correct');
// }
// // false, null, undefined, '', 0/-0, NaN -- falsy
// if(value) {
//     console.log('Correct');
// }

// const port = 0;
// let PORT;
// if(port) {
//     PORT = port;
// } else {
//     PORT = 5500;
// }
// const PORT1 = port || 5500; // false, null, undefined, '', 0/-0, NaN
// const PORT2 = port ?? 5500; // null, undefined
// console.log(PORT1);
// console.log(PORT2);