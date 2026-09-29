// Given a circular pizza with slice options where:
// 3 units cost ₹50
// 6 units cost ₹150
// 9 units cost ₹300
// Determine the minimum total cost required to obtain a target area of at least 16 units (16 or more units) by choosing valid slice combinations.

let minCost = Infinity;
const memoizedCost = {};

const pizzaPrice = {
    3: 50,
    6: 150,
    9: 300,
};

const smallPizza = 3;
const mediumPizza = 6;
const largePizza = 9;

const lowestCostPizza = (target, cost) => {
    if (target <= 0) {
        minCost = Math.min(minCost, cost);
        return 0;
    }

    if (target in memoizedCost) {
        minCost = Math.min(minCost, cost + memoizedCost[target]);
        return memoizedCost[target];
    }

    const costWithSmall = pizzaPrice[smallPizza] +
        lowestCostPizza(target - smallPizza, cost + pizzaPrice[smallPizza]);
    const costWithMedium = pizzaPrice[mediumPizza] +
        lowestCostPizza(target - mediumPizza, cost + pizzaPrice[mediumPizza]);
    const costWithLarge = pizzaPrice[largePizza] +
        lowestCostPizza(target - largePizza, cost + pizzaPrice[largePizza]);

    memoizedCost[target] = Math.min(
        costWithSmall,
        costWithMedium,
        costWithLarge,
    );

    return memoizedCost[target];
};

lowestCostPizza(23, 0);
console.log(`₹${minCost}`);
