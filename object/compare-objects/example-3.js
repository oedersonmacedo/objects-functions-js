function isEqual(object1, object2) {
    let equal = true;

    if (object1.length !== object2.length) {
        return false;
    }
    
    if (typeof object1 !== 'object' || typeof object2 !== 'object') {
        return false;
    }


    for (let key in book2) {
        if (book2[key] !== book1[key]) {
            equal = false;
            break;
        }
    }

    return equal;
}

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
};
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin",
};

console.log(isEqual(book1, book2));