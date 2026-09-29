// Given a circular pizza with slice options where:
// 3 units cost ₹50
// 6 units cost ₹150
// 9 units cost ₹300
// Determine the minimum total cost required to obtain a target area of at least 16 units (16 or more units) by choosing valid slice combinations.

let minCost = Infinity;
let memoizedCost = {};
const pizzaPrice = {
    3: 50,
    6: 150,
    9: 300,
};

const smallPizza = 3;
const mediumPizza = 6;
const largePizza = 9;

const setPizzaSliceCost = (target, cost, noOfSlice) => {
    if (memoizedCost[target]) {
        if (memoizedCost[target] > cost + pizzaPrice[noOfSlice]) {
            memoizedCost[target] = cost;
        }
        return;
    }
    memoizedCost[target] = Math.ceil(target / noOfSlice) *
        pizzaPrice[noOfSlice];
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

    lowestCostPizza(
        smallPizza,
        medium,
        large,
        target - smallPizza,
        cost + pizzaPrice[smallPizza],
    );
    setPizzaSliceCost(target, cost, smallPizza);

    lowestCostPizza(
        small,
        mediumPizza,
        large,
        target - mediumPizza,
        cost + pizzaPrice[mediumPizza],
    );
    setPizzaSliceCost(target, cost, mediumPizza);

    lowestCostPizza(
        small,
        medium,
        largePizza,
        target - largePizza,
        cost + pizzaPrice[largePizza],
    );
    setPizzaSliceCost(target, cost, largePizza);
};

lowestCostPizza(0, 0, 0, 17, 0);
console.log(minCost);
