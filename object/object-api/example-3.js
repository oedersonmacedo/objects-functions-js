const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

const javascript1 = Object.assign({}, javascript);

console.log(javascript);
// expect output: { name: 'JavaScript', year: 1995, paradigm: 'OO and Functional' }

console.log(javascript1);
// expect output: { name: 'JavaScript', year: 1995, paradigm: 'OO and Functional' }

console.log(Object.is(javascript, javascript));
// expect output: true

console.log(Object.is(javascript1, javascript));
// expect output: false