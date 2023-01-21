const _instanceof = function (obj, fn) {
    if (obj === null) return false;
    if (obj === fn.prototype) return true;
    return _instanceof(obj.__proto__, fn);
}
const date = new Date();
console.log(date instanceof Date);
// exepect output: true

console.log(date instanceof Object);
// exepect output: true

console.log(date instanceof Array);
// exepect output: false

console.log(_instanceof(date, Date));
// exepect output: true

console.log(_instanceof(date, Object));
// exepect output: true

console.log(_instanceof(date, Array));
// exepect output: false