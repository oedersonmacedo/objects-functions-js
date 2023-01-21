const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const calculator = (fn) => (a, b) => fn(a, b);

console.log(calculator(sum)(2, 2));
// expect output: 4

console.log(calculator(subtract)(2, 2));
// expect output: 0