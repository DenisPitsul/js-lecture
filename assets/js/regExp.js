// "use strict";

// // *
// // ?
// // !
// // [A-Z]
// // [a-z]
// // [0-9]

// // Створення регулярки

// const regExp1 = new RegExp("\\br", "i");
// const regExp2 = /\br/gi;

// const testString = "rkjsjf rkjnjk lkjklsfsdfrrrr";

// // regexp.test(string) => boolean
// console.log(regExp1.test(testString));
// console.log(testString.match(regExp2));

// // Межі -------------------------------------------------------
// // ^ - початок рядка
// // $ - кінець рядка
// // \b - границя слова (a-zA-Z0-9_)
// // \B - не межа слова

// // . - один будь-який символ

// // Квантифікатори
// // {8} - строго 8 символів         ( .{8} )
// // {1,10} - від 1 до 10            ( 1{3,5} -  111 1111 11111)
// // {1,} - від 1 до нескінченності
// // * - {0,} - від 0 до нескінченності
// // ? - {0,1} - від 0 до 1
// // + - {1,} - від 1 до нескінченності

// // Перевірити, чи відповідає рядок "ім'я прізвище" (4-10 8-20)
// const string1 = "Test Testovych";
// const reg1 = /^.{4,10} .{8,20}$/g;
// console.log(string1.match(reg1));

// // Task: Перевірити, що введений рядок email 1-10@1-20.2-4
// // f@f.com +
// // @dsfsdf.dfg -

// const email = "rffftyjgdf@mail.com";
// const reg2 = /^.{1,10}@.{1,20}\..{2,4}$/;
// console.log(email.match(reg2));

// // Знайти в тексті dog/dogs
// const text = "I have a dog and my friens has many dogs. I like hotdogs";
// const regDog = /\bdogs?\b/g;

// console.log(text.match(regDog));

// // Альтернативні символи / один з групи символів ---------------------

// // [0123456789ABCDEF]
// // \d = [0123456789] = [0-9]
// // \D = ^\d
// // [a-z]
// // [A-Z]
// // [a-zA-Z]
// // \w [a-zA-Z0-9_] - символи слова
// // \W = ^\w
// // \s - space
// // \S = ^\s

// // Перевірити ім'я Aa, Aaaa (2-32)
// const name = "Ivo";
// const nameReg = /^[A-Z][a-z]{1,31}$/;
// console.log(name.match(nameReg));

// const tel = "+380-12-345-6789";
// const telReg = /^\+380-?\d{2}-?\d{3}-?\d{4}$/;
// console.log(tel.match(telReg));

// const number = "123 dsd 33";
// const numberReg = /\b-?\d+\b/g;
// console.log(number.match(numberReg));

// const number2 = "123.6";
// const numberReg2 = /^-?\d+(\.\d+)?$/g;
// console.log(number2.match(numberReg2));

// const pasport = "AA 000000";
// const passportReg = /^[A-Z]{2}\ ?\d{6}$/;
// console.log(pasport.match(passportReg));

// const petText = "I have a dog. But my sister has a parrot.";
// const petReg = /\b(dog|cat|parrot)\b/g;
// console.log(petText.match(petReg));

// const pets = ["dog", "cat", "parrot"];
// const petReg2 = new RegExp(`\\b(${pets.join("|")})\\b`, "g");
// console.log(petText.match(petReg2));

// const tel2 = "+380-98-345-67-89";
// const telReg2 = /^\+380-?(97|98|99|67)-?\d{3}(-\d{2}){2}$/;
// console.log(tel2.match(telReg2));

// const name2 = "Adddd-Asd";
// const nameReg2 = /^[A-Z][a-z]{1,31}(-[A-Z][a-z]{1,31})?$/;
// console.log(name2.match(nameReg2));

// const codeText = "const a = [1,0,2,3]; const b = 10; const c = [{a:10}];'";
// const codeTextReg = /\[.*?\]/g;
// console.log(codeText.match(codeTextReg));

// Позитивна випереджаюча перевірка / positive lookahead
// console.log("I bought 10 apple by 1$".match(/\d+(?=\$)/g));

// Є також:
// Негативна випереджаюча перевірка / negative lookahead
// Позитивна ретроспективна перевірка / positive lookbehind
// Негативна ретроспективна перевірка / negative lookbehind

// Для перевырки пароля
// довжина: 8-16, мають бути букви верхнього і нижнього регістру, цифри, спец. символи
// console.log(
//   "Aq1g.qqy".match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&.]).{8,16}$/)
// );

// const str1 = "Fsdvsddsv    vdssdvsdvsd     sdvsdvsd  sdvdvs    sdvdsvsddsv";
// const resultStr = str1.replace(/\s{2,}/g, " ");
// console.log(resultStr);

// const str2 = "Fuck you. )))) You are asshole";
// const resultStr2 = str2.replace(/\b(fuck|ass|asshole)\b/gi, "***");
// console.log(resultStr2);

// const str3 = "Fsdvsddsv    vdssdvsdvsd     sdvsdvsd  sdvdvs    sdvdsvsddsv";
// const resultArr = str3.split(/\s+/);
// console.log(resultArr);

// const dateStr = "1999/01/01";
// const dateArr = dateStr.split(/[-\/\.]/);
// console.log(dateArr);
