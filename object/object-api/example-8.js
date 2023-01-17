const javascript = {};
Object.defineProperty(javascript, "name", { enumerable: true, value: "JavaScript", writable: true });
// Without tag configurable
delete javascript.name;

console.log(javascript);
// expect output: { name: 'ECMAScript' }

const javascript1 = {};
Object.defineProperty(javascript1, "name", {
    configurable: true,
    enumerable: true,
    value: "JavaScript",
    writable: true
});
// With tag configurable
delete javascript1.name;

console.log(javascript1);
// expect output: {}

