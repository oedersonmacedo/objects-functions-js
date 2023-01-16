const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";
const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;
const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;
javascript.paradigm = "OO";

for (let key in javascript) {
    console.log(key, javascript[key]);
}
// expect output: 
// 'name JavaScript'
// 'year 1995'
// 'paradigm OO'

console.log(javascript.paradigm);
// expect output: 'OO'

console.log(javascript.__proto__.paradigm);
// expect output: 'Functional'

console.log(Object.getPrototypeOf(javascript).paradigm);
// expect output: 'Functional'