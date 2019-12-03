// Created by wxc on 2019/12/03

// 1.数字矩阵/数字字符串矩阵 去重
// 对象属性名比较 一个对象中每个属性的属性名是唯一的
function unique(matrix) {
    let obj = {};
    let res = [];// 结果
    matrix.map(item => {
        item.sort((a, b) => a - b);
        if (!obj.hasOwnProperty(item)) {
            obj[item] = item;
            res.push(item);
        }
    })
    return res;
}

// 同样是利用属性名的唯一性，这个更简洁
function unique(matrix) {
    let res = {};
    matrix.map(item => {
        item.sort((a, b) => a - b);
        res[item] = item;
    })
    return Object.values(res);
}

let matrix = [
    [1, 2, 3],
    [2, 3, 4],
    [2, 1, 3],
    [5, 6, 7]
];
console.log(unique(matrix));

// 2.字符串矩阵去重
// 数组元素可能位置不同但元素内容相同，所以必须按照某一顺序对其进行排序，这里按首字母对字符串进行排序
function _unique(matrix) {
    let res = {};
    matrix.map(item => {
        item.sort((a, b) => a.localeCompare(b));
        res[item] = item;
    })
    return Object.values(res);
}

function _unique(matrix) {
    let res = [];
    matrix.map(item => {
        res.push(item.sort((a, b) => a.localeCompare(b)).toString());
    })
    // return Array.from(new Set(res)).map(item => item.split(','))
    return [...new Set(res)].map(item => item.split(','));// 上下等价
}

let _matrix = [
    ["你的", "我", "它"],
    ["我", "你的", "它"],
    ["一", "二", "三"],
    ["三", "二", "一"],
    ["你d", "a", "它"],
    ["a", "你d", "它"],
    ["one", "two", "three"],
    ["three", "two", "one"]
];
console.log(_unique(_matrix));