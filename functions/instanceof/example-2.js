const date = new Date();
console.log(date instanceof Date);
// exepect output: true

console.log(date instanceof Object);
// exepect output: true

console.log(date instanceof Array);
// exepect output: false

console.log(typeof date);
// exepect output: object