// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

const num = 600851475143;

const largestPrimeFactors = (num) => {
    let largestPrime = -1;

    while (num % 2 == 0) {
        largestPrime = 2;
        num /= 2;
    }

    for (let curr = 3; curr * curr <= num; curr += 2) {
        while (num % curr === 0) {
            largestPrime = curr;
            num /= curr;
        }
    }

    if (num > 2) {
        largestPrime = num;
    }

    return largestPrime;
};

const max = largestPrimeFactors(num);
console.log(max);
