// 正则表达式迷你书 练习代码

// 横向模糊匹配
var regex = /ab{2,5}c/g;
var str = "abc acb abbb cab abbbbbbc abbbbc"
console.log(str.match(regex));// ["abbbbc"]


// 纵向模糊匹配
var regex = /a[123]b/g;
var str = "a0b a1b a1c a4v a2b a22b a3b";
console.log(str.match(regex));// ["a1b", "a2b", "a3b"]