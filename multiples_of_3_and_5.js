// Multiples of 3 or 5
// Problem 1

// If we list all the natural numbers below 10 that are multiples 3 or 5. The sum of these multiples is 23.
// Find the sum of all the multiples of  or  below .

let limit = prompt("Enter the limit");
let sum = 0;

for (let current = 1; current < limit; current++) {
    if (current % 3 === 0 || current % 5 === 0) {
        sum += current;
    }
}

console.log(sum);
