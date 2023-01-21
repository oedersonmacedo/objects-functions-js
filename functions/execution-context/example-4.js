const obj1 = {
    p1: 10,
    getP1: function() {
        return this.p1;
    }
};
console.log(obj1.getP1());
// expect output: 10

const obj2 = {
    p1: 11,
    getP1: function() {
        function fn1() {
            return this.p1;
        }
        return fn1();
    }
};
console.log(obj2.getP1());
// expect output: undefined

const obj3 = {
    p1: 12,
    getP1: function() {
        const that = this;
        function fn1() {
            return that.p1;
        }
        return fn1();
    }
};
console.log(obj3.getP1());
// expect output: 12

const obj4 = {
    p1: 13,
    getP1: function() {
        const fn1 = () => {
            return this.p1;
        }
        return fn1();
    }
};
console.log(obj4.getP1());
// expect output: 13