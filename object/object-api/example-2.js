const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

console.log(Object.keys(javascript));
// expect output: ['name', 'year', 'paradigm' ]

console.log(Object.values(javascript));
// expect output: [ 'JavaScript', 1995, 'OO and Functional' ]

console.log(Object.entries(javascript));
/** expect output:
[
    [ 'name', 'JavaScript' ],
    [ 'year', 1995 ],
    [ 'paradigm', 'OO and Functional' ]
]
 */