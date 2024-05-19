// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsDate1 = new Date("2024-05-18");

// const obj1 = new Object();
// const obj2 = Object();
// const obj3 = {};

// const news = {
//     newsTitle: "Lorem ipsum dolor sit amet",
//     newsBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     newsDate: new Date("2024-05-18"),
// }
// console.log(news);
// console.log(news.newsTitle);
// news.newsDate = new Date('2024-05-19');
// console.log(news);

// news.author = "Test Testovich";
// console.log(news);

// delete news.newsDate;
// console.log(news);

// const car = {
//     brand: "Audi",
//     model: "A4",
//     year: 2013,
//     number: "CE1234BB",
//     color: "black",
//     owner: {
//         firstName: "Test",
//         lastName: "Testovich"
//     }
// }
// console.log(car);
// car.color = "white";
// delete car.year;
// car.author = "Carl Cameron";
// console.log(car);
// document.write(`<h2>${car.brand}, ${car.model}</h2>`);
// document.write(`<p>${car.owner.firstName} ${car.owner.lastName}</p>`);

// const a = 1;
// let b = a;
// console.log(b);
// console.log(a === b);
// b = 100;
// console.log(a, b);

// let newsCopy = news;
// console.log('newsCopy:', newsCopy);
// newsCopy.author = 'new Test';
// console.log('newsCopy:', newsCopy);
// console.log('news:', news);

// const correctNewsCopy1 = Object.assign({}, news);
// console.log('correctNewsCopy1 === news:', correctNewsCopy1 === news);
// const correctNewsCopy2 = { ...news };
// console.log('correctNewsCopy2 === news:', correctNewsCopy2 === news);

// const carCopy1 = Object.assign({}, car);
// console.log('carCopy1 === car:', carCopy1 === car);
// const carCopy2 = { ...car };
// console.log('carCopy2 === car:', carCopy2 === car);

// function getFullName() {
//     return `${this.firstName} ${this.lastName}`
// }
// const user = {
//     firstName: "Test",
//     lastName: "Testovich",
//     passw: "qwerty",
//     age: 23,
//     // getFullName: function() {
//     //     return `${this.firstName} ${this.lastName}`
//     // },
//     getFullName: getFullName,
//     changePassw(newPassw) {
//         this.passw = newPassw;
//     }
// }
// const fullName = user.getFullName();
// console.log(fullName);
// document.write(`<h2>${user.getFullName()}</h2>`);
// user.changePassw(prompt('Input new password'));
// console.log(user);

// function f() {
//     console.log("this: ", this);
// }
// f();

// const car = {
//     brand: "Audi",
//     model: "A4",
//     year: 2013,
//     number: "CE1234BB",
//     color: "black",
//     owner: {
//         firstName: "Test",
//         lastName: "Testovich"
//     },
//     changeColor(newColor) {
//         this.color = newColor
//     },
//     getAge() {
//         return new Date().getFullYear() - this.year;
//     }
// }
// car.changeColor('white');
// console.log(car.getAge());
// console.log(car);
// console.dir(car);

// for(const key in car) {
//     console.log(key, car[key])
// }
// const propName = "color";
// console.log('color:', car[propName]);

// const cat = {};
// for (let i = 0; i < 3; i++) {
//     const key = prompt("Enter the key");
//     const value = prompt("Enter the value");
//     cat[key] = value;
// }
// console.dir(cat);

// function User(name, surname, userAge, userEmail, isMale) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = userAge;
//     this.email = userEmail;
//     this.isMale = isMale;
//     // this.changeEmail = function(newEmail) {
//     //     this.email = newEmail;
//     // };
// }
// User.prototype.changeEmail = function(newEmail) {
//     this.email = newEmail;
// };
// User.typename = 'User';

// const user1 = new User('Test', 'Testovich', 23, 'mail@gmail.com', true);
// const user2 = new User('Wally', 'Robot', 2, 'wally@robot.mail', true);
// user1.changeEmail('newemail@gmail.com');
// console.log(user1);

// function Car(brand, model, year, color) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }
// const car = new Car('Audi', 'A4', 2013, 'black');
// console.log(car);

// console.log(typeof 4);
// console.log(typeof {});
// console.log(typeof function() {});
// console.log(typeof user1);
// console.log(typeof car);

// console.log(user1 instanceof User);
// console.log(user1 instanceof Car);
// console.log(user1 instanceof Object);
