const personPrototype = {
    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }
};

const createPerson = function(name, city, year) {
    const person = {
        name,
        city,
        year
    };
    Object.setPrototypeOf(person, personPrototype);
    return person;
};
const person = createPerson("Leonard Leakey Hofstadter", "New Jersey", 1980);
const person1 = createPerson("Sheldon Lee Cooper", "Galveston", 1980);

console.log(person);
// expect output: { name: 'Leonard Leakey Hofstadter', city: 'New Jersey', year: 1980, getAge: [Function: getAge] }

console.log(person.getAge());
// expect output: 43

console.log(person1);
// expect output: { name: 'Sheldon Lee Cooper', city: 'Galveston', year: 1980, getAge: [Function: getAge] }

console.log(person1.getAge());
// expect output: 43

console.log(person.__proto__);
// expect output: { getAge: [Function: getAge] }

console.log(person1.__proto__);
// expect output: { getAge: [Function: getAge] }

console.log(person.__proto__ === person1.__proto__);
// expect output: true

console.log(person.getAge === person1.getAge);
// expect output: true
