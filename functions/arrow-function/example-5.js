const person = {
    name: "Leonard Leakey Hofstadter",
    city: "New Jersey",
    year: 1980,
    getAge: function() {
        return (new Date()).getFullYear() - this.year;
    }
};

console.log(person);
// expect output: { name: 'Leonard Leakey Hofstadter', city: 'New Jersey', year: 1980, getAge: [Function: getAge] }

console.log(person.getAge());
// expect output: 43

const person1 = {
    name: "Leonard Leakey Hofstadter",
    city: "New Jersey",
    year: 1980,
    getAge: () => {
        return (new Date()).getFullYear() - this.year;
    }
};
console.log(person1);
// expect output: { name: 'Leonard Leakey Hofstadter', city: 'New Jersey', year: 1980, getAge: [Function: getAge] }

console.log(person1.getAge());
// expect output: NaN