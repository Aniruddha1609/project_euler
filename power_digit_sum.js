// 2^15 = 32768  and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2 ^ 1000 ?

const numberPowerObj = {
    0: 1,
};

const calculateSubPowers = (keys, index, val, power, diff, powerLimit) => {
    const currentNumber = numberPowerObj[keys[index]];
    val = val * currentNumber;
    power += Number(keys[keys.length - 1]);
    diff = powerLimit - power;
    return { val, power, diff };
};

const subPowers = (diff, val, power, powerLimit) => {
    const keys = Object.keys(numberPowerObj);
    while (diff !== 0) {
        const index = keys.length - 1;
        if (diff >= keys[index]) {
            ({ val, power, diff } = calculateSubPowers(
                keys,
                index,
                val,
                power,
                diff,
                powerLimit,
            ));
        } else keys.pop();
    }
    return val;
};

const powers = (power, powerLimit, val) => {
    while ((power + power) < powerLimit) {
        const currentNumber = numberPowerObj[power];
        val = currentNumber * currentNumber;
        power += power;
        numberPowerObj[power] = val;
    }
    return { power, val };
};

const sum = (val) => {
    return BigInt(val).toString().split("").reduce(
        (acc, val) => acc + Number(val),
        0,
    );
};

const powerDigitSum = (number, powerLimit) => {
    let val = number;
    let power = 1;
    numberPowerObj[power] = number;
    ({ power, val } = powers(power, powerLimit, val));
    let diff = powerLimit - power;
    val = subPowers(diff, val, power, powerLimit);
    return sum(val);
};

console.log(powerDigitSum(2, 1000));
