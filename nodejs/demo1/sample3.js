var calc = require("./sample3-module");
var calc2 = require("./sample3-module2");

var result = calc.add(10, 30);
console.log("덧셈결과", result);

console.log(calc.area(3));
console.log(calc.PI);

console.log(calc2.multiple(5, 4));
console.log(calc2.divide(10, 4));