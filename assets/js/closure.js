// const a = 'global';
// function f1() {
//     const a = 'local';
//     f2();
// }
// function f2() {
//     console.log(a);
// }
// f1();

// const a = 'global';

// function f1 () {
//   const a = 'local';

//   function f2 () {
//     console.log('a :>> ', a);
//   }

//   f2();
// }
// f1();

// function counter() {
//     let count = 0;

//     function inc() {
//         return count++;
//     }

//     return inc;
// }

// const count1 = counter();
// console.log(count1());
// console.log(count1());
// console.log(count1());

// const count2 = counter();
// console.log(count2());
// console.log(count2());
// console.log(count2());