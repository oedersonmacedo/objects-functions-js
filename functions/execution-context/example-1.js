const v1 = 10;
const fn1 = function() {
    console.log(v1);
    // expect output: 10
};
fn1();

const fn2 = function() {
    const v1 = 100;
    console.log(v1);
    // expect output: 100
};
fn2();

const fn3 = function() {
    const fn = function() {
        console.log(v1);
        // expect output: 10
    }
    fn();
};
fn3();

const fn4 = function() {
    const v1 = 100;
    const fn = function() {
        console.log(v1);
        // expect output: 100
    }
    fn();
};
fn4();