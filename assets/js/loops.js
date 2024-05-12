// let currentStep = 1;
// const STEPS_COUNT = 4;
// while(currentStep <= STEPS_COUNT) {
//     console.log(currentStep);
//     console.log('Пройти прямо');
//     console.log('Повернути на 90 град наліво');
//     currentStep++;
// }
// console.log("Next line");

// let currentPage = 10;
// const END_PAGE = 20;
// while(currentPage <= END_PAGE) {
//     console.log(currentPage++);
// }

// let currentPage = 10;
// const END_PAGE = 20;
// while (currentPage <= END_PAGE) {
//   console.log("Current page: ", currentPage);
//   currentPage += 2;
// }

// let currentPage = Number(prompt('Input start page'));
// const endPage = Number(prompt('Input end page'));
// while(currentPage <= endPage) {
//     if(currentPage % 2 === 0) {
//         console.log(currentPage);
//     }
//     currentPage++;
// }

// let inputNumber = Number(prompt('Input number'));
// while(!Number.isFinite(inputNumber)) {
//     inputNumber = Number(prompt('Input number'));
// }
// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// let inputNumber = Number(prompt('Input number'));
// while(true) {
//     if (Number.isFinite(inputNumber)) {
//         console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);
//         break;
//     } else {
//         inputNumber = Number(prompt('Input number'));
//     }
// }

// let inputNumber = null;
// do {
//     inputNumber = Number(prompt('Input number'));
// } while(Number.isFinite(inputNumber))
// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// let currentPage = 50;
// const END_PAGE = 40;
// do {
//     console.log(`Current page ${currentPage}`);
//     currentPage--;
// } while(currentPage >= END_PAGE)

// const CORRECT_PASSWORD = 'qwerty';
// const TRY_LIMIT = 3;
// let isPasswordCorrect = false;
// let currentTry = 1;
// do {
//     let inputPassword = prompt('Input password');
//     if(inputPassword === CORRECT_PASSWORD) {
//         console.log('Password is correct');
//         isPasswordCorrect = true;
//         break;
//     }
// } while(++currentTry <= TRY_LIMIT)
// if (!isPasswordCorrect) {
//     console.log('Password is wrong');
// }

// const CORRECT_PASSWORD = 'qwerty';
// const TRY_LIMIT = 3;
// let isPasswordCorrect = false;
// let currentTry = 1;
// do {
//     isPasswordCorrect = prompt('Input password') === CORRECT_PASSWORD;
// } while(++currentTry <= TRY_LIMIT && !isPasswordCorrect)
// console.log(`Password is ${isPasswordCorrect ? 'correct' : 'wrong'}`);

// const stopPage = 10;
// for(let startPage = 1; startPage <= stopPage; startPage++) {
//     console.log(startPage);
// }

// let startNumber = 101;
// let endNumber = 91
// for(let i = startNumber; i >= endNumber; i--) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

// const startNumber = 1;
// const endNumber = 20;
// let sum = 0;
// for(let i = startNumber; i <= endNumber; i++) {
//     sum += i;
// }
// console.log('Sum:', sum);

// const startNumber = 5;
// const END_NUMBER = 12;
// let mul = 1;
// for(let i = startNumber; i <= END_NUMBER; i++) {
//     if(i % 2 === 0) {
//         mul *= i;
//     }
// }
// console.log('Mul:', mul);

// const currentDate = new Date('2024-04-05');
// const startDate = currentDate.getDate();
// const monthNumber = currentDate.getMonth();
// const currentYear = currentDate.getFullYear();
// const nextMonth = monthNumber + 1;
// const lastMonthDate = new Date(currentYear, nextMonth, 0);
// const endDate = lastMonthDate.getDate();
// document.write('<table><thead><tr>');
// for(let date = startDate; date <= endDate; date++) {
//     document.write(`<th>${date}</th>`)
// }
// document.write('</tr></thead></table>');