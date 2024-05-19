// function sayHello() {
//     document.write(`<p>Hello User!</p>`)
// }
// sayHello();

// function sayHello(user, surname) {
//     document.write(`<p>Hello ${user} ${surname}!</p>`)
// }
// sayHello('Test', 'Testovich');
// sayHello('Wally','Robot');

// function sayHello(user, surname) {
//     const resultString = `Hello ${user} ${surname}!`;
//     return resultString;
// }
// const helloString = sayHello('Test', 'Testovich');
// console.log('helloString:', helloString);
// document.write(`<p>${helloString}</p>`);

// function sum(a, b) {
//     return a + b;
// }
// function inputSummand(summandNumber) {
//     let summand;
//     do {
//         summand = prompt(`Enter ${summandNumber} number`);
//     } while(!Number.isFinite(+summand) || summand === '')
//     return Number(summand);
// }
// const firstSummand = inputSummand(1);
// const secondSummand = inputSummand(2);
// const result = sum(firstSummand, secondSummand);
// console.log(result);

// function isAdult(age) {
//     return age >= 18;
// }
// const age = 16;
// console.log(isAdult(age));

// const age = 20;

// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsTitle2 = "Consectetur adipiscing elit";
// const newsTitle3 = "Sed do eiusmod tempor";

// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsBody2 =
//   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
// const newsBody3 =
//   "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// const newsDate1 = new Date("2024-05-18");
// const newsDate2 = new Date("2024-05-17");
// const newsDate3 = new Date("2024-05-16");

// function getMarckupForNews(newsTitle, newsBody, newsDate) {
//     const nowSpan = newsDate.toLocaleDateString() === new Date().toLocaleDateString()
//         ? " <span class='todayNews'>New!</span>"
//         : "";

//     return `
//         <article>
//             <h3>${newsTitle} ${nowSpan}</h3>
//             <p>${newsBody}</p>
//             <p>${newsDate.toDateString()}</p>
//         </article>`;
// }

// if (age < 18) {
//     document.write('<p>Content may contains ...</p>')
// }
// document.write(
//     getMarckupForNews(newsTitle1, newsBody1, newsDate1),
//     getMarckupForNews(newsTitle2, newsBody2, newsDate2),
//     getMarckupForNews(newsTitle3, newsBody3, newsDate3)
// );

// /**
//  * @function pow
//  * @param {number} a - Power base
//  * @param {number} [exp = 2] - Power exp
//  * @returns {number} Base a in power exp
//  */
// function pow(a, exp = 2) {
//     return a ** exp;
// }
// console.log(pow(4));
// console.log(pow(4, 3));

// /**
//  * @function getMarckupForUser
//  * @param {string} firstName - User first name
//  * @param {string} [lastName = "Anonymus"] - User last name
//  * @returns {string} User card marckup
//  */
// function getMarckupForUser(firstName, lastName = 'Anonymus') {
//     return `
//         <article>
//             <h3>${firstName} ${lastName}</h3>
//         </article>`;
// }
// document.write(getMarckupForUser('Test'));

// fName();
// // Function Declaration
// function fName(par1, par2) {
//     console.log('fName');
// }
// // Function Expression
// const fName1 = function(par1, par2) {
//     console.log('fName1')
// }
// fName1();

// /**
//  * @function getMarckupForUser
//  * @param {string} firstName - User first name
//  * @param {string} [lastName = "Anonymus"] - User last name
//  * @returns {string} User card marckup
//  */
// const getMarckupForUser = function(firstName, lastName = 'Anonymus') {
//     return `
//         <article>
//             <h3>${firstName} ${lastName}</h3>
//         </article>`;
// }
// document.write(getMarckupForUser('Test'));

// let b = 10;
// function notDeterm(a) {
//     // return a * Math.random();
//     return a * b;
// }
// console.log(notDeterm(100));
// b = 200;
// console.log(notDeterm(100));