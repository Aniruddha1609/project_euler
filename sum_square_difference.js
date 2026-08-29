// The sum of the squares of the first ten natural numbers is 385,
// The square of the sum of the first ten natural numbers is 3025,
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is  2640 .
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// const sumOfSquares = (limit) => {
//     let sum = 0;
//     for (let curr = 1; curr <= limit; curr++) {
//         sum += curr ** 2;
//     }
//     return sum;
// };

// const squareOfSum = (limit) => {
//     let sum = 0;
//     for (let curr = 1; curr <= limit; curr++) {
//         sum += curr;
//     }
//     return sum ** 2;
// };

// console.log(sumOfSquares(10));
// console.log(squareOfSum(10));

const diff = (limit) => {
    let sumOfSquares = 0;
    let squareOfSum = 0;
    for (let curr = 1; curr <= limit; curr++) {
        sumOfSquares += curr ** 2;
        squareOfSum += curr;
    }
    return (squareOfSum ** 2) - sumOfSquares;
};

console.log(diff(100));
