// Starting in the top left corner of a 2 * 2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20 * 20 grid?

let ROWLIMIT;
let COLOUMNLIMIT;

const routeObj = {};
let point;
const route = (row, column, count) => {
    let currentPoint;
    currentPoint = row + " " + column;
    if (routeObj[currentPoint]) {
        count.push(count[0] + routeObj[currentPoint]);
        count.shift();
        return;
    }
    if (row === ROWLIMIT && column === COLOUMNLIMIT) {
        count.push(count[0] + 1);
        count.shift();
        return;
    }
    if (row !== ROWLIMIT && column !== COLOUMNLIMIT) {
        route(row, column + 1, count);
        route(row + 1, column, count);
        point = row + " " + column;
        const leftChild = row + " " + (column + 1);
        const rightChild = (row + 1) + " " + column;
        routeObj[point] = routeObj[leftChild] + routeObj[rightChild];
    }
    if (row === ROWLIMIT) {
        route(row, column + 1, count);
        point = row + " " + column;
        routeObj[point] = 1;
    }
    if (column === COLOUMNLIMIT) {
        route(row + 1, column, count);
        point = row + " " + column;
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
