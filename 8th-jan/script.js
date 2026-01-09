// Standard Method
// const sumOfNumbers = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(sumOfNumbers(1)); //NaN

const sumOfNumbers = (num1, num2 = 2) => {
    return num1 + num2;
}

console.log(sumOfNumbers(1,9));

