
const sumArrowFunction = (...restParameter) => {
    let total = 0;
    for(let argument in restParameter) {
        total += restParameter[argument];
    }
    return total;
};
console.log(sumArrowFunction(1,2,3,4,5,6,7,8,9));
// expect output: 45