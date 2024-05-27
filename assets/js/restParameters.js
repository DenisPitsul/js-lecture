// function sum(...argsOfSum) {
//     // console.log(arguments);
//     // console.log(argsOfSum);
//     let sum = 0;
//     for(const el of argsOfSum) {
//         sum += el;
//     }
//     return sum;
// }

// const a = sum(1, 2, 5);
// console.log(a);

// function f(firstEl, ...restParams) {
//     console.log(firstEl);
//     console.log(restParams);
// }

// const b = f(1, 2, 5);

function accum(sign, ...numbers) {
    if(sign === '+') {
        let sum = 0;
        for(const el of numbers) {
            sum += el;
        }
        return sum;
    } else if(sign === '*') {
        let mult = 1;
        for(const el of numbers) {
            mult *= el;
        }
        return mult;
    } else {
        return 'Unknown sign';
    }
}

console.log(accum('+', 1, 2, 8));
console.log(accum('+', 1, 2, 8, 10));

console.log(accum('*', 1, 2, 8));
console.log(accum('*', 1, 2, 8, 10));