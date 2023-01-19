const rectangle = {};
Object.defineProperty(rectangle, "area", {
    get() {
        return this._x * this._y;
    }
});
Object.defineProperty(rectangle, "x", {
    set(x) {
        if (x > 0) {
            this._x = x;
        } else {
            console.log("Invalid value for x");
        }
    }
});
Object.defineProperty(rectangle, "y", {
    set(y) {
        if (y > 0) {
            this._y = y;
        } else {
            console.log("Invalid value for y");
        }
    }
});
rectangle.x = -10;
// expect output: 'Invalid value for x'

rectangle.y = -2;
// expect output: 'Invalid value for y'

console.log(rectangle.area);
// expect output: NaN