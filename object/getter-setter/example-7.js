const rectangle = {};
Object.defineProperty(rectangle, "area", {
    get() {
        return this.x * this.y;
    }
});
Object.defineProperty(rectangle, "x", {
    set(x) {
        this.x = x;
    }
});
Object.defineProperty(rectangle, "y", {
    set(y) {
        this.y = y;
    }
});

rectangle.x = 10;
// GENERATE ERROR: RangeError: Maximum call stack size exceeded