// const user = {
//     firstName: 'Test',
//     lastName: 'Testovich'
// }

// function renderUser({firstName: name ='Anon', lastName='Anonimous'}) {
//     document.write(`
//         <article>
//             <h2>${name} ${lastName}</h2>
//         </article>
//     `);
// }
// renderUser(user);

// const book = { author: "Astred Lindgren", title: "Karlson" };
// function writeBook({ author = "Undefined author", title = "Undefined title" }) {
//   document.write(`<p>${author} ${title}</p>`);
// }

// const book = {
//     author: {
//         firstName: 'Astered',
//         lastName: 'Lindgren',
//     },
//     title: 'Karison'
// }
// const {
//     author: { firstName, lastName },
//     title,
// } = book;

// function writeBook({ author: { firstName, lastName}, title}) {
//     document.write(`<p>${firstName} ${lastName} : ${title}</p>`);
// }
// writeBook(book);

// const arr = [1, 2, 3];
// const [firstEl, secondEl, thirdEl] = arr;
// const [, , thirdEl1] = arr;
// console.log('thirdEl -> ', thirdEl1);

// const user1 = {
//     name: "Test",
//     age: 23,
//     emails: ["test1@test.com", "test2@test.com"],
//     isMale: true,
// };
// // Task: name -> userName, age -> userAg, email1, email2, isMale
// const {name: userName, age: userAge, emails: [email1, email2], isMale} = user1;

// const attr = { id: 'btn', style: 'color:blue', title: 'click me'};
// const {style, ...restAttr} = attr;
// console.log(style);
// console.log(restAttr);

// const { name: userName1, ...restUser } = user1;