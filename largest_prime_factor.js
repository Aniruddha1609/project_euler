// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

const num = 13195;

const isPrime = (num) => {
    for (let curr = 2; curr < (Math.sqrt(num)); curr++) {
        if (num % curr === 0) return false;
    }
    return true;
};

const largestPrimeFactors = (num) => {
    let max = 1;
    for (let curr = 2; curr < Math.floor(num / 2); curr++) {
        if (num % curr === 0 && curr > max && isPrime(curr)) max = curr;
    }
    return max;
};

const max = largestPrimeFactors(num);
console.log(max);
