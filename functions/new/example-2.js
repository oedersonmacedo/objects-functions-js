const createPerson = function(name, city, year) {
    return {
        name,
        city,
        year,
        getAge() {
            return ((new Date()).getFullYear() - this.year);
        }
    }
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