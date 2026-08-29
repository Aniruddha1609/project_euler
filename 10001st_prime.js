// By listing the first six prime numbers: 2, 3, 5, 7, 11 and 13 , we can see that the 6th prime is 13.
// What is the  st prime number?

const isPrime = (number) => {
    for (let divisor = 2; divisor <= Math.floor(Math.sqrt(number)); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }
    return true;
};

const getNthPrime = (limit) => {
    let count = 0;
    let num = 2;
    while (count !== limit) {
        if (isPrime(num)) count++;
        num++;
    }
    num -= 1;
    return num;
};

console.log(getNthPrime(10001));
