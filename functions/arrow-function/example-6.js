const sumFunction = function() {
    let total = 0;
    for(let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};

console.log(sumFunction(1,2,3,4,5,6,7,8,9));
// expect output: 45

const sumArrowFunction = () => {
    let total = 0;
    for(let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(sumArrowFunction(1,2,3,4,5,6,7,8,9));
// expect output: 0[object Object]function require(path)