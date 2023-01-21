const sum = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const calculator = (fn) => {
    return (a, b) => {
        return fn(a, b);
    };
};

console.log(calculator(sum)(2, 2));
// expect output: 4

console.log(calculator(subtract)(2, 2));
// expect output: 0