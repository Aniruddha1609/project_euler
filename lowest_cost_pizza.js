// Given a circular pizza with slice options where:
// 3 units cost ₹50
// 6 units cost ₹150
// 9 units cost ₹300
// Determine the minimum total cost required to obtain a target area of at least 16 units (16 or more units) by choosing valid slice combinations.

let minCost = Infinity;
let memoizedCost = {};
const pizzaSlicePrize = {
    3: 50,
    6: 150,
    9: 300,
};

const setPizzaSliceCost = (target, cost, noOfSlice) => {
    if (memoizedCost[target]) {
        if (memoizedCost[target] > cost + pizzaSlicePrize[noOfSlice]) {
            memoizedCost[target] = cost;
        }
    } else {
        memoizedCost[target] = Math.ceil(target / noOfSlice) *
            pizzaSlicePrize[noOfSlice];
    }
};

const lowestCostPizza = (small, medium, large, target, cost) => {
    if (target <= 0) {
        minCost = minCost > cost ? cost : minCost;
        return;
    }

    if (Object.keys(memoizedCost).join("").includes(target.toString())) {
        lowestCostPizza(small, medium, large, 0, cost + memoizedCost[target]);
        return;
    }

    lowestCostPizza(3, medium, large, target - 3, cost + pizzaSlicePrize[3]);
    setPizzaSliceCost(target, cost, 3);

    lowestCostPizza(small, 6, large, target - 6, cost + pizzaSlicePrize[6]);
    setPizzaSliceCost(target, cost, 6);

    lowestCostPizza(small, medium, 9, target - 9, cost + pizzaSlicePrize[9]);
    setPizzaSliceCost(target, cost, 9);
};

lowestCostPizza(0, 0, 0, 12, 0);
console.log(minCost);
