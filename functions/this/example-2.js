const rectangle = {
    x: 10,
    y: 2,
    calculateArea() {
        return this.x * this.y;
    }
};

console.log(rectangle.calculateArea());
// expect output: 20

const calculateArea = function() {
    return this.x * this.y;
};
const rectangle1 = {
    x: 10,
    y: 2,
    calculateArea
};
console.log(calculateArea());
// expect output: NaN

console.log(rectangle1.calculateArea());
// expect output: 20