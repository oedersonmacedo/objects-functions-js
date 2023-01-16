const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};

console.log(functionalLanguage);
// expect output: { paradigm: 'Functional' }

console.log(scheme);
// expect output: { name: 'Scheme', year: 1975 }

console.log(javascript);
// expect output: { name: 'JavaScript', year: 1995 }

console.log(scheme.paradigm);
// expect output: 'Functional'

console.log(javascript.paradigm);
// expect output: 'Functional'
