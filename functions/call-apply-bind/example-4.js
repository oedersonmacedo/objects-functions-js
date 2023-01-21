try {
    const calculateArea = function(fn) {
        return fn(Math.PI * Math.pow(this.radius, 2));
    };
    const circle = {
        radius: 10,
        calculateArea
    };
    calculateArea.apply(circle, Math.ceil);
    // GENERATE ERROR.
} catch (error) {
    console.error(error.message);
    // GENERATE ERROR: TypeError: fn is not a function
    // Because to pass function in apply it is necessary to pass Array[].
    // That is, (circle, [Math.ceil])
}

const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(calculateArea.apply(circle, [Math.ceil]));
// expect output: 315