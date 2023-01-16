const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975
};
Object.setPrototypeOf(scheme, functionalLanguage);
const javascript = {
    name: "JavaScript",
    year: 1995
};
Object.setPrototypeOf(javascript, functionalLanguage);
for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}
// expect output: 
// 'name true'
// 'year true'
// 'paradigm false'