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

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

const javascript1 = Object.assign({}, javascript);

console.log(javascript);
// expect output: { name: 'JavaScript', year: 1995, paradigm: 'OO and Functional' }

console.log(javascript1);
// expect output: { name: 'JavaScript', year: 1995, paradigm: 'OO and Functional' }

console.log('Compare javascript, javascript', Object.is(javascript, javascript));
// expect output: 'Compare javascript, javascript Object.is' true

console.log('Compare javascript1, javascript Object.is', Object.is(javascript1, javascript));
// expect output: 'Compare javascript1, javascript Object.is' false

console.log('Compare javascript1, javascript method isEqual', isEqual(javascript1, javascript));
// expect output: 'Compare javascript1, javascript method isEqual' true