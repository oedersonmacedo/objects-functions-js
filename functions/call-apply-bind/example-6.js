const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
const calculateCircle = calculateArea.bind(circle);
console.log(calculateCircle(Math.round));
// expect output: 314

console.log(calculateCircle(Math.ceil));
// expect output: 315
