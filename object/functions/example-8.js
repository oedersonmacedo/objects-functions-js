let sum = function(value1, value2, value3, ...numbers) {
    let total = value1 + value2 + value3;
    for(let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));
// expect output: 45