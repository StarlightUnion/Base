// Created by wxc on 2019/07/25

// 1.判断一个数组内的所有值是否想等
function IsAllEqual(arr) {

    // 1.some() 测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个布尔值。
    // if (arr.length) {
    //     return !arr.some(function (value, index) {
    //         return value !== arr[0];
    //     });
    // } else {
    //     return true;
    // }

    // 2.every() 测试一个数组内的所有元素是否都能通过某个指定函数的测试。返回一个布尔值。
    return arr.every(function (value) {
       return value === arr[0];
    });
}