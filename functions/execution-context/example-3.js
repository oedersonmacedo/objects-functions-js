const v1 = 10;
const fn1 = function() {
    const v1 = 100;
    const fn2 = function() {
        const v1 = 1000;
        console.log(v1);
        // expect output: 1000

        const v2 = 10000;
        console.log(v2);
        // expect output: 10000
    }
    fn2();
};
fn1();
console.log(v2);
// GENERATE ERROR: v2 is not defined