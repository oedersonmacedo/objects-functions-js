const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};
const {name: n1, author: a1, year: y1} = language;
console.log(n1, a1, y1);


const language1 = {
    name: "Fortran",
    author: "John Backus",
    year: 1924,
    company: {
        name: "Fortran INC"
    }
};

const {name: n, author: a, year: y, company: {name: c}} = language1;
console.log(n, a, y, c);