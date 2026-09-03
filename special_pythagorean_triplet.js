// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pythagoreanTriplet = (totalSum) => {
    for (let a = 1; a <= Math.floor(totalSum / 2); a++) {
        for (let b = a + 1; b <= Math.floor(totalSum / 2); b++) {
            const c = totalSum - (a + b);
            if (a ** 2 + b ** 2 === c ** 2 && a + b + c === 1000) {
                return [a, b, c];
            }
        }
    }
};

const [a, b, c] = pythagoreanTriplet(1000);

console.log(a * b * c);
