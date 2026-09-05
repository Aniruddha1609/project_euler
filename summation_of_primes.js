// The sum of the primes below 10 is 17.
// Find the sum of all the primes below two million.

const isPrime = (curr) => {
    if (curr % 2 === 0 || curr % 3 === 0) {
        return false;
    }
    for (let divisor = 5; divisor <= Math.sqrt(curr); divisor += 6) {
        if (curr % divisor === 0 || curr % (divisor + 2) === 0) return false;
    }
    return true;
};

const sumOfPrimeUnderLimit = (limit) => {
    let sum = 5;
    for (let curr = 4; curr < limit; curr++) {
        if (isPrime(curr)) {
            sum += curr;
        }
    }
    return sum;
};

console.log(sumOfPrimeUnderLimit(2000000));
