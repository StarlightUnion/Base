# JavaScript中如何跳出循环/结束遍历

> 直接抛结论，下表是JS中常用的实现循环遍历的方法的跳出/结束遍历的办法，经过测试后的总结。可能各位大佬还有其他的办法，我在此表示大佬NB。

序号 | 方法 | break | continue | return | return true | return false | 结论
:-: | :-: | :-: | :-: | :-: | :-: | :-: | :-:
1 | ``for循环`` | 成功 | 跳出本次循环 | 不合法 | 不合法 | 不合法 | √
2 | ``Array.forEach()`` | 不合法| 不合法 | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 | ×
3 | ``for...in`` | 成功 | 跳出本次循环 | 不合法 | 不合法 | 不合法 | √
4 | ``Array.map()`` | 不合法 | 不合法 | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 | ×
5 | ``Array.some()`` | 不合法 | 不合法 | 跳出本次循环 | 成功 | 跳出本次循环 | √
6 | ``Array.every()`` | 不合法 | 不合法 | 成功 | 跳出本次循环 | 成功 | √
7 | ``Array.filter()`` | 不合法 | 不合法 | 跳出本次循环 | 跳出本次循环 | 跳出本次循环 | ×

> ``forEach``、``map``和``filter``目前我不知有什么办法停止遍历，在其他几种方法中，上表中列出的方法均可实现结束循环。

### 1. for循环
```
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
```
### 2. Array.forEach()
```
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
```
### 3. for...in...
```
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
```
### 4. Array.map()
```
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
```
### 5. Array.some()
```
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
```
### 6. Array.every()
```
var arr = ['a', 'b', 'c', 'd', 'e'];
var show = [];

arr.every((item, index) => {
    if (index === 2) {
        // break;// Uncaught SyntaxError: Illegal break statement
        // continue;// Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        // return;// ["a", "b"] 成功跳出循环
        // return true;// ["a", "b", "d", "e"] 只能跳出本次循环
        return false;// ["a", "b"] 成功跳出循环
    }
    return show.push(item);
})
```
> ``some()``与``every()``不同，some遍历中一个为真全部即为真，而every遍历中全部为真才行。some遍历中返回``true``才会退出执行，而every则需要返回``false``才会退出执行。

### 7. Array.filter()
```
var arr = ['a', 'b', 'c', 'd', 'e'];
var show = [];

arr.filter((item, index) => {
    if (index === 2) {
        // break;// Uncaught SyntaxError: Illegal break statement
        // continue;// Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        // return;// ["a", "b", "d", "e"] 只能跳出本次循环
        // return true;// ["a", "b", "d", "e"] 只能跳出本次循环
        return false;// ["a", "b", "d", "e"] 只能跳出本次循环
    }
    show.push(item);
})
```