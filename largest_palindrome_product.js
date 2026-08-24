// A palindromic number reads the same both ways. The largest palindrome made from the product of two -digit numbers is 9009 = 91 * 99 .
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (num) => {
    const copyOfNum = num;
    let totalNum = 0;
    while (num > 0) {
        const rem = num % 10;
        totalNum = totalNum * 10 + rem;
        num = Math.floor(num / 10);
    }
    return copyOfNum === totalNum;
};

const largestPalindrome = (limit) => {
    let max = 0;
    for (let multiplier1 = limit; multiplier1 > 0; multiplier1--) {
        for (let multiplier2 = limit; multiplier2 > 0; multiplier2--) {
            const product = multiplier1 * multiplier2;
            if (isPalindrome(product) && product > max) {
                max = multiplier1 * multiplier2;
            }
        }
    }
    return max;
};

console.log(largestPalindrome(999));
