const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

Object.freeze(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";

delete javascript.year;
console.log(javascript);
// expect output: { name: 'JavaScript', year: 1995, paradigm: 'OO and Functional' }

console.log(Object.isExtensible(javascript));
// expect output: false

console.log(Object.isSealed(javascript));
// expect output: true

console.log(Object.isFrozen(javascript));
// expect output: true