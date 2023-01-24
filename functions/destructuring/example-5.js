const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};
var name = language.name;
var author = language.author;
var year = language.year;
console.log(name, author, year);
//expect output: 'C Dennis Ritchie 1972'

var {name, author, year} = language;
console.log(name, author, year);
// expect output: 'C Dennis Ritchie 1972'