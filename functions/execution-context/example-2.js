const v1 = 10;
const fn1 = function() {
    const v1 = 100;
    const fn2 = function() {
        const v1 = 1000;
        console.log(v1);
        // expect output: 1000
    }
    fn2();
};
fn1();