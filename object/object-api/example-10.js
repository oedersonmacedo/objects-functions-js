const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.seal(javascript);

javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
// expect output: { name: 'ECMAScript', year: 1995, paradigm: 'OO and Functional' }

console.log(Object.isExtensible(javascript));
// expect output: false

console.log(Object.isSealed(javascript));
// expect output: true