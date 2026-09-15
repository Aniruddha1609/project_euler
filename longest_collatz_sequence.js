// The following iterative sequence is defined for the set of positive integers:
//  n --> n / 2 ( is even)
//  n --> 3n + 1  ( is odd)
// Using the rule above and starting with 13 , we generate the following sequence:  13 --> 40 --> 20 --> 10 --> 5 --> 16 -->  8 --> 4 --> 2 --> 1
// It can be seen that this sequence (starting at  and finishing at ) contains  terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at .
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

const sequenceLength = {
    1: 1,
};

const evenInSequence = (current, count, initialValue) => {
    const halfOfCurrent = Math.floor(current / 2);
    count += sequenceLength[halfOfCurrent];
    sequenceLength[initialValue] = count;
    const halfOfInitial = initialValue / 2;
    delete sequenceLength[halfOfInitial];
    return count;
};

const collatzSequence = (current) => {
    let count = 1;
    const initialValue = current;
    while (current > 1) {
        const char = String(current / 2);
        if (current % 2 === 0 && Object.hasOwn(sequenceLength, char)) {
            count = evenInSequence(current, count, initialValue);
            return count;
        }
        if (current % 2 === 0) current = current / 2;
        else current = current * 3 + 1;
        count++;
    }
    return count;
};

const longestCollatzSequence = (limit) => {
    let longestSequenceLength = 0;
    let longestSequence = 0;
    for (let current = 2; current < limit; current++) {
        const collatzSequenceLength = collatzSequence(current);
        if (collatzSequenceLength > longestSequenceLength) {
            longestSequenceLength = collatzSequenceLength;
            longestSequence = current;
        }
    }
    return longestSequence;
};

console.log(longestCollatzSequence(1000000));
