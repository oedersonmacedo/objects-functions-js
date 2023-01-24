function sum({a, b}) {
    return a + b;
}

console.log(sum({a: 2, b: 2}));
//expect output: 4

function sum1([a, b]) {
    return a + b;
}

console.log(sum1([2, 2]));
//expect output: 4