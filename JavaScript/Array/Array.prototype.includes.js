// includes
// 检查数组中是否包含某个值
let array = [1, 2, 3, 4, 5, 6];
console.log(array.includes(2));// true
console.log(array.includes(10));// false


// 从某个索引开始检查是否包含某个值
console.log(array.includes(4, 1));// true
console.log(array.includes(4, 4));// false
console.log(array.includes(4, 10));// false


// 索引小于0
console.log(array.includes(4, -10));// true
console.log(array.includes(4, -3));// true
console.log(array.includes(4, -2));// false


function test () {
  console.log(arguments);// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

  // arguments.includes(1);// Uncaught TypeError: arguments.includes is not a function
  console.log([].includes.call(arguments, 1));// true
  console.log([].includes.call(arguments, 4));// false
}
test(1, 2, 3);

(function () {
  console.log([].includes.call(arguments, 1));// true
  console.log([].includes.call(arguments, 4));// false
})(1, 2, 3);