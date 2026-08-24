// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
let num;
let limit = 20;

const isDivisibleByAll = (num) => {
    for (let curr = 2; curr <= limit; curr++) {
        if (num % curr !== 0) return false;
    }
    return true;
};

const smallestMultiple = (limit) => {
    num = limit;
    while (!isDivisibleByAll(num)) num++;
};

smallestMultiple(limit);
console.log(num);
