const rectangle = {
    set x(x) {
        if (x > 0) {
            this._x = x;
        } else {
            console.log("Invalid value for x");
        }
    },
    set y(y) {
        if (y > 0) {
            this._y = y;
        } else {
            console.log("Invalid value for y");
        }
    },
    get area() {
        return this._x * this._y;
    }
};
rectangle.x = -10;
// expect output: 'Invalid value for x'

rectangle.y = -2;
// expect output: 'Invalid value for y'

console.log(rectangle.area);
// expect output: NaN