const language = "C;Dennis Ritchie".split(";");
const [name = "-", author = "-", year = "-"] = language;

console.log(name, author, year);
// expect output: 'C Dennis Ritchie -'