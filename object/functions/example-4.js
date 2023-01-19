let sum = function(a, b) {
    return a + b;
};

let subtract = function(a, b) {
    return a - b;
};

let calculator = function(fn) {
    return function(a, b) {
        return fn(a, b);
    }
};

console.log(calculator(sum)(2, 2));
// expect output: 4

console.log(calculator(subtract)(2, 2));
// expect output: 0