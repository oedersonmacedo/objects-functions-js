const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};
const circle = {
    radius: 5,
    calculateArea
};

console.log(calculateArea.call(circle));
// expect output: 78.53981633974483