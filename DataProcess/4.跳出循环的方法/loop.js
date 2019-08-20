// Created by wxc on 2019/08/20

// 1. for循环 只能向上跳出一级循环
var arr = ['a', 'b', 'c', 'd', 'e'];
var show = [];
for (var i = 0; i < arr.length; i++) {
    if (i === 2) {
        break;// ['a', 'b'] 成功跳出循环
        // continue;// ['a', 'b', 'd', 'e'] 只能跳出本次循环
        // return;// Uncaught SyntaxError: Illegal return statement
        // return true;// Uncaught SyntaxError: Illegal return statement
        // return false;// Uncaught SyntaxError: Illegal return statement
    }
    show.push(arr[i]);
}

console.log('show', show);


// 2. arr.forEach() 无法跳出循环
var arr = ['a', 'b', 'c', 'd', 'e'];
var show = [];

arr.forEach((item, index) => {
    if (index === 2) {
        // break;// Uncaught SyntaxError: Illegal break statement
        // continue;// Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        // return;// ["a", "b", "d", "e"] 只能跳出本次循环
        // return true;// ["a", "b", "d", "e"] 只能跳出本次循环
        // return false;// ['a', 'b', 'd', 'e'] 只能跳出本次循环
    }
    show.push(item);
})

console.log('show', show);


// 3. for...in 只能向上跳出一级循环
var arr = ['a', 'b', 'c', 'd', 'e'];
var show = [];

for (var item in arr) {
    if (item === '2') {
        break;// ["a", "b"] 跳出循环成功
        // continue;// ["a", "b", "d", "e"] 只能跳出本次循环
        // return;// Uncaught SyntaxError: Illegal return statement
        // return true;// Uncaught SyntaxError: Illegal return statement
        // return false;// Uncaught SyntaxError: Illegal return statement
    }

    show.push(arr[item]);
}

console.log('show', show);


// 4. arr.map() 无法跳出循环
var arr = ['a', 'b', 'c', 'd', 'e'];
var show = [];

arr.map((item, index) => {
    if (index === 2) {
        // break;// Uncaught SyntaxError: Illegal break statement
        // continue;// Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        // return;// ["a", "b", "d", "e"] 只能跳出本次循环
        // return true;// ["a", "b", "d", "e"] 只能跳出本次循环
        // return false;// ["a", "b", "d", "e"] 只能跳出本次循环
    }
    show.push(item);
})

console.log('show', show);


// 5. arr.some() 跳出循环成功 返回的必须为true 只能向上跳出一级循环
var arr = ['a', 'b', 'c', 'd', 'e'];
var show = [];

arr.some((item, index) => {
    if (index === 2) {
        // break;// Uncaught SyntaxError: Illegal break statement
        // continue;// Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        // return;// ["a", "b", "d", "e"] 只能跳出本次循环
        return true;// ["a", "b"] 成功跳出循环
        // return false;// ["a", "b", "d", "e"] 只能跳出本次循环
    }
    show.push(item);
})

console.log('show', show);


// 6. arr.every() 跳出循环成功 只要有返回值就结束循环 能够跳出多级循环
var arr = ['a', 'b', 'c', 'd', 'e'];
var show = [];

arr.every((item, index) => {
    if (index === 2) {
        // break;// Uncaught SyntaxError: Illegal break statement
        // continue;// Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        return;// ["a"] 成功跳出循环
        return true;// ["a"] 成功跳出循环
        return false;// ["a"] 成功跳出循环
    }
    show.push(item);
})

console.log('show', show);