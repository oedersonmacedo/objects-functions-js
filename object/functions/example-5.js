function sumWithoutValueDefault(a, b) {
    return a + b;
}
console.log(sumWithoutValueDefault(2, 2));
// expect output: 4

console.log(sumWithoutValueDefault(5));
// expect output: NaN

console.log(sumWithoutValueDefault(1, 2, 3));
// expect output: 3

function sumWithValueDefault(a = 0, b = 0) {
    return a + b;
}
console.log(sumWithValueDefault(2, 2));
// expect output: 4

console.log(sumWithValueDefault(5));
// expect output: 5

console.log(sumWithValueDefault());
// expect output: 0