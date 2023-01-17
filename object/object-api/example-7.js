const javascript = {};
Object.defineProperty(javascript, "name", { enumerable: true, value: "JavaScript" });
// Without tag writable
javascript.name = "ECMAScript";
console.log(javascript);
// expect output: { name: 'JavaScript' }

console.log(Object.keys(javascript));
// expect output: [ 'name' ]

console.log(Object.values(javascript));
// expect output: [ 'JavaScript' ]

console.log(Object.entries(javascript));
// expect output: [ [ 'name', 'JavaScript' ] ]

const javascript1 = {};
Object.defineProperty(javascript1, "name", { enumerable: true, value: "JavaScript", writable: true });
// With tag writable
javascript1.name = "ECMAScript";
console.log(javascript1);
// expect output: { name: 'ECMAScript' }

console.log(Object.keys(javascript1));
// expect output: [ 'name' ]

console.log(Object.values(javascript1));
// expect output: [ 'ECMAScript' ]

console.log(Object.entries(javascript1));
// expect output: [ [ 'name', 'ECMAScript' ] ]