const javascript1 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
const javascript2 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
function isEqual(object1, object2) {
    let equal = true;

    if (object1.length !== object2.length) {
        return false;
    }
    
    if (typeof object1 !== 'object' || typeof object2 !== 'object') {
        return false;
    }


    for (let key in object1) {
        if (object1[key] !== object1[key]) {
            equal = false;
            break;
        }
    }

    return equal;
}

console.log(Object.is(javascript1, javascript2));
// expect output: false

console.log(isEqual(javascript1, javascript2));
// expect output: true