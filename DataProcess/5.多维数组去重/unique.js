// Created by wxc on 2019/12/03

function unique(matrix) {
    let obj = {};
    let res = [];// 结果

    matrix.map((item, index) => {
        if (!obj.hasOwnProperty(item)) {
            obj[item] = index;
            res.push(item);
        }
    })
    return res;
}

let matrix = [[1, 2, 3], [2, 3, 4], [1, 2, 3], [5, 6, 7]];
console.log(unique(matrix));

function b(){};
var arr = ['b', 'b', b, b, null, null, undefined, undefined, '2', 2, 2, '[2,3]', [2, 3], [4, 4, [5], [5]], [6, [7, 8]], [6, [7, 8]]];
console.log(unique(arr));