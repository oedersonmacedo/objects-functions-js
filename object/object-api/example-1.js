const javascript = Object.create({});
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
});

console.log(javascript);
// expect output: { name: 'JavaScript', year: 1995, paradigm: 'OO and Functional' }

const javascript1 = Object.create({});

Object.assign(javascript1, 
    { name: "JavaScript", year: 1995, paradigm: "OO and Functional" },
    { author: "Brendan Eich", influencedBy: "Java, Scheme and Self" }
);

Object.assign(javascript1, { cityAuthor: "Pittsburgh" });

console.log(javascript1);
/*** expect output: 
{
    name: 'JavaScript', 
    year: 1995,
    paradigm: 'OO and Functional',
    author: 'Brendan Eich',
    influencedBy: 'Java, Scheme and Self',
    cityAuthor: 'Pittsburgh'
}
*/