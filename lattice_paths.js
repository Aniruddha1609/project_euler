// Starting in the top left corner of a 2 * 2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20 * 20 grid?

let ROWLIMIT;
let COLOUMNLIMIT;

const routesFromCurrentPoint = (count, routesAtCurrentPoint = 1) => {
    count.push(count[0] + routesAtCurrentPoint);
    count.shift();
    return;
};

const currentPointRoute = (row, column) => {
    return row + " " + column;
};

const routeObj = {};
let point;

const route = (row, column, count) => {
    point = currentPointRoute(row, column);
    if (routeObj[point]) {
        return routesFromCurrentPoint(count, routeObj[point]);
    }
    if (row === ROWLIMIT && column === COLOUMNLIMIT) {
        return routesFromCurrentPoint(count);
    }
    if (row !== ROWLIMIT && column !== COLOUMNLIMIT) {
        route(row, column + 1, count);
        route(row + 1, column, count);
        point = currentPointRoute(row, column);
        const leftChild = currentPointRoute(row, column + 1);
        const rightChild = currentPointRoute(row + 1, column);
        routeObj[point] = routeObj[leftChild] + routeObj[rightChild];
    }
    if (row === ROWLIMIT) {
        route(row, column + 1, count);
        point = currentPointRoute(row, column);
        routeObj[point] = 1;
    }
    if (column === COLOUMNLIMIT) {
        route(row + 1, column, count);
        point = currentPointRoute(row, column);
        routeObj[point] = 1;
    }
};

const routeCount = (rowLimit, columnLimit) => {
    ROWLIMIT = rowLimit;
    COLOUMNLIMIT = columnLimit;
    let count = [0];
    route(0, 0, count);
    return count;
};

const [count] = routeCount(20, 20);
console.log(count);
