const max = 10000000
let counter = 0;

const money = { company: { value: 100, nameCompany: '777', percentage: 70 } }
console.time("performance with create (faster)");
while (counter < max) {
    const team = Object.create(money);
    team.name = 'Vasco do gama';

    counter++;
}
console.timeEnd("performance with create (faster)");

counter = 0;
console.time("performance with __proto__ (midium)");
while (counter < max) {
    const team = {
        name: 'Vasco do gama',
        __proto__: money
    }

    counter++;
}
console.timeEnd("performance with __proto__ (midium)");

counter = 0;
console.time("performance with setPrototypeOf (Slower)");
while (counter < max) {
    const team = {
        name: 'Vasco do gama'
    }
    Object.setPrototypeOf(team, money);

    counter++;
}
console.timeEnd("performance with setPrototypeOf (Slower)");
