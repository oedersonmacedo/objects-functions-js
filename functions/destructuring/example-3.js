const [name, author, year] = "C;Dennis Ritchie;1972".split(";");
console.log(name, author, year);
// expect output: 'C Dennis Ritchie 1972'

const [, author1, year1] = "Fortran;John Backus;1924".split(";");
console.log(author1, year1);
// expect output: 'John Backus 1924'