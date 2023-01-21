const Person = function(name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year,
    this.getAge = function() {
        return ((new Date()).getFullYear() - this.year);
    }
};

const person = new Person("Leonard Leakey Hofstadter", "New Jersey", 1980);
const person1 = new Person("Sheldon Lee Cooper", "Galveston", 1980);

console.log(person);
// expect output: { name: 'Leonard Leakey Hofstadter', city: 'New Jersey', year: 1980, getAge: [Function (anonymous)] }

console.log(person.getAge());
// expect output: 43

console.log(person1);
// expect output: { name: 'Sheldon Lee Cooper', city: 'Galveston', year: 1980, getAge: [Function (anonymous)] }

console.log(person1.getAge());
// expect output: 43

console.log(person.__proto__);
// expect output: {}

console.log(person1.__proto__);
// expect output: {}

console.log(person.__proto__ === person1.__proto__);
// expect output: true

console.log(person.getAge === person1.getAge);
// expect output: false
