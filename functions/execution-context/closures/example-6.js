function fn1() {
    let v1 = 10;
    return {
        m1() {
            console.log(++v1);
        },
        m2() {
            console.log(--v1);
        }
    };
};
const obj1 = fn1();
obj1.m1();
// when calling variable through function print: 11

obj1.m2();
// when calling variable through function print: 10

