// 1.判断一个数组内的所有值是否想等
function IsAllEqual(arr) {
    // if (arr.length) {
    //     return !arr.some(function (value, index) {
    //         return value !== arr[0];
    //     });
    // } else {
    //     return true;
    // }

    return arr.every(function (value) {
       return value === arr[0];
    });
}