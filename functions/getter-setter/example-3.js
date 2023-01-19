const rectangle = {
    set x(x) {
        this._x = x;
    },
    set y(y) {
        this._y = y;
    },
    get area() {
        return this._x * this._y;
    }
};
rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);
// expect output: 20