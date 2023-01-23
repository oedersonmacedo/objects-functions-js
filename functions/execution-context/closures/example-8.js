var obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = (function (v2) {
      return function () {
        console.log(v2);
      };
  })(v1);
}
obj1[0]();
// when calling variable through function print: 0

obj1[1]();
// when calling variable through function print: 1

obj1[2]();
// when calling variable through function print: 2

var obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = (function () {
    console.log(this.v1);
  }).bind({v1});
}
obj1[0]();
// when calling variable through function print: 0

obj1[1]();
// when calling variable through function print: 1

obj1[2]();
// when calling variable through function print: 2
