// console.log('before error');
// const a = 4 + b;
// console.log('after error');
// document.write('<h1>My page</h1>');

// console.log('before error');
// try {
//     console.log('before error in try')
//     const a = 4 + b;
//     console.log('after error in try')
// } catch(err) {
//     console.error('err -> ', err)
//     document.write('<p>Sorry, service is unavailable</p>')
// }
// console.log('after error');
// document.write('<h1>My page</h1>');

// throw new Error('ReferenceError: b is not defined');
// function f(n) {
//     if (typeof n !== 'number') {
//         throw new Error('n must be a number');
//     }
//     return n * n;
// }

// try {
//     console.log('f(5): ', f('5'));
// } catch(err) {
//     console.log('err: ', err);
// }

// function fact(n) {
//   if (typeof n !== "number") {
//     throw new TypeError("n must be number");
//   }
//   if (!Number.isInteger(n) || n < 0 || n > Number.MAX_SAFE_INTEGER) {
//     throw new RangeError("n must be nonnegative integer value");
//   }

//   function factorial(m) {
//     if (m === 0) {
//       return 1;
//     }
//     return m * factorial(m - 1);
//   }

//   return factorial(n);
// }

// try {
//   const f = fact(5);
//   console.log("f :>> ", f);
// } catch (e) {
//   console.log("e :>> ", e);
// }

// function validateName(name) {
//     name = name.trim();
//     if (typeof name !== 'string') {
//         throw new TypeError('name nust be string');
//     }
//     if (name.length < 4 || name.length > 32) {
//         throw new RangeError('name must be 4-32 length');
//     }
//     return name;
// }

// try {
//     console.log(validateName('User'));
// } catch (err) {
//     if (err instanceof RangeError) {
//         console.log('RangeError');
//     } else if (err instanceof TypeError) {
//         console.log('TypeError');
//     } else {
//         console.log('Error');
//     }
// }

// function validateAge(age) {
//     if (typeof age !== 'number') {
//         throw new TypeError('Age must be number');
//     }
//     if (!Number.isInteger(age)) {
//         throw new TypeError("Age must be an integer");
//     }
//     if (age < 0) {
//         throw new RangeError("Age must be a positive number");
//     }
//     if (age > 150) {
//         throw new RangeError("Age must be less than 150");
//     }
//     return age;
// }

// try {
//     console.log(validateAge(4));
// } catch (err) {
//     console.log(err);
// }