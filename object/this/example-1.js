const square = {
    value: 9,
    calculator() {
        return Math.pow(this.value, 2);
    }
}

const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() {
        return this.x * this.y;
    }
};

console.log(square.calculator());
// expect output: 81

console.log(rectangle.calculateArea());
// expect output: 20
