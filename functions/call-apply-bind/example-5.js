const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 5,
    calculateArea
};
console.log(calculateArea.call(circle, Math.round));
// expect output: 79