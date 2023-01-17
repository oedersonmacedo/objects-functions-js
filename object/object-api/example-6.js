const javascript = {};
Object.defineProperty(javascript, "name", { value: "JavaScript" });

console.log(javascript);
// expect output: {}

console.log(Object.keys(javascript));
// expect output: []

console.log(Object.values(javascript));
// expect output: []

console.log(Object.entries(javascript));
// expect output: []

const javascript1 = {};
Object.defineProperty(javascript1, "name", { enumerable: true, value: "JavaScript" });

console.log(javascript1);
// expect output: { name: 'JavaScript' }

console.log(Object.keys(javascript1));
// expect output: [ 'name' ]

console.log(Object.values(javascript1));
// expect output: [ 'JavaScript' ]

console.log(Object.entries(javascript1));
// expect output: [ [ 'name', 'JavaScript' ] ]