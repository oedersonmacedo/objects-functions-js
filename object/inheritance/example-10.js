const max = 10000000
          //10000000
let counter = 0;

const championships = [
    {
        name: 'Serie A',
        premium: '20m'
    },
    {
        name: 'Copa do Brasil',
        premium: '120m'
    }
];

const money = { company: { value: 100, nameCompany: '777', percentage: 70 } }
const object = {money, championships};

console.time("performance with create (faster)");
while (counter < max) {
    const team = Object.create(object);
    team.name = 'Vasco do gama';
    
    team;
    delete team;
    counter++;
}
console.timeEnd("performance with create (faster)");

counter = 0;
console.time("performance with __proto__ (midium)");
while (counter < max) {
    const team = {
        name: 'Vasco do gama',
        __proto__: object
    }
    
    team;
    delete team;

    counter++;
}
console.timeEnd("performance with __proto__ (midium)");

counter = 0;
console.time("performance with setPrototypeOf (Slower)");
while (counter < max) {
    const team = {
        name: 'Vasco do gama'
    }
    Object.setPrototypeOf(team, object);

    team;
    delete team;
    counter++;
}
console.timeEnd("performance with setPrototypeOf (Slower)");