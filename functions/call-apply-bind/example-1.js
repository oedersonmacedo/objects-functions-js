const circle = {
    radius: 10,
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(circle.calculateArea());
// expect output: 314.1592653589793

const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = {
    radius: 10,
    calculateArea
};
console.log(circle1.calculateArea());
// expect output: 314.1592653589793