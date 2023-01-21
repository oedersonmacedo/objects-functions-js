const createPersonFunction = function(name, city, year) {
    return {
        name,
        city,
        year
    };
};

const person = createPersonFunction("Leonard Leakey Hofstadter", "New Jersey", 1980);
console.log(person);
// expect output: { name: 'Leonard Leakey Hofstadter', city: 'New Jersey', year: 1980 }

const createPersonArrowFunctionError = (name, city, year) => {name, city, year};
const person1 = createPersonArrowFunctionError("Leonard Leakey Hofstadter", "New Jersey", 1980);
console.log(person1);
// expect output: undefined

const createPersonArrowFunctionSuccess = (name, city, year) => ({name, city, year});
const person2 = createPersonArrowFunctionSuccess("Leonard Leakey Hofstadter", "New Jersey", 1980);
console.log(person2);
// expect output: { name: 'Leonard Leakey Hofstadter', city: 'New Jersey', year: 1980 }