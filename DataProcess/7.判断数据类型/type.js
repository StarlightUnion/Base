// Created by wxc on 2020/01/13
// link:https://mp.weixin.qq.com/s/DLrTFVCPH6MszBdaoLWTtQ

// 1.typeof 不能准确判断数据类型
console.log(typeof 1);// number
console.log(typeof '1');// string
console.log(typeof null);// object

console.log(typeof []);// object
console.log(typeof {});// object
// console.log(typeof window.alert);// function

// 2.instanceof 不能准确判断数据类型
function Func () {}

const func = new Func();
console.log(func instanceof Func);// true

const obj = {};
const arr = [];
console.log(obj instanceof Object);// true
console.log(arr instanceof Object);// true
console.log(arr instanceof Array);// true

const str = 'abc';
const _str = new String('abc');
console.log(str instanceof String);// false
console.log(_str instanceof String);// true


// 3.Object.prototype.toString.call()
// 每个对象都有一个toString()方法，当要将对象表示为文本值或以预期字符串的方式引用对象时，
// 会自动调用该方法。默认情况下，从Object派生的每个对象都会继承toString()方法。
// 如果此方法未在自定义对象中被覆盖，则toString()返回[Object type]，其中type是对象类型。
console.log(Object.prototype.toString.call(new Date()));// [object Date]
console.log(Object.prototype.toString.call('1'));// [object String]
console.log(Object.prototype.toString.call(1));// [object Number]
console.log(Object.prototype.toString.call(undefined));// [object Undefined]
console.log(Object.prototype.toString.call(null));// [object Null]


var type = function (data) {
    var toString = Object.prototype.toString;
    var dataType = data instanceof Element
                        ? 'element'
                        : toString
                            .call(data)
                            .replace(/\[object\s(.+)\]/, '$1')
                            .toLowerCase()
    return dataType;
}

console.log(type('a'));// string
console.log(type(1));// number
console.log(type(window));// window
console.log(type(document.querySelector('h1')));// element 需写在html中
