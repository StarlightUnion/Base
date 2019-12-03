#JavaScript中如何对多维数组(矩阵)去重

> 今天碰到了一个问题，需要对一个数组矩阵进行去重处理。
>
> 比如如下数组矩阵：
>
``[ [1, 2, 3], [2, 3, 4], [2, 1, 3], [5, 6, 7] ]``
>
> 接下来是去重处理的方法。

### 1.适用于``纯数字数组矩阵``和``字符数字数组矩阵``
```
// 本节用例：
// 1.纯数字数组矩阵
[
	[1, 2, 3],
	[2, 3, 4],
	[2, 1, 3],
	[5, 6, 7]
]
// 2.字符数字数组矩阵
[
	['1', '2', '3'],
	['2', '3', '4'],
	['2', '1', '3'],
	['5', '6', '7']
]

// 如果数字和字符数字混合的话，类似于 [1, '2', 3] 和 ['1', '2', 3] 会被认为是等价的...
```
> 主要利用对象属性名比较的方法，因为一个对象中每个属性的属性名是唯一的。

```
function unique(matrix) {
    let obj = {};
    let res = [];
    matrix.map(item => {
        item.sort((a, b) => a - b);
        if (!obj.hasOwnProperty(item)) {// 判断对象中是否有这个属性名
            obj[item] = item;
            res.push(item);
        }
    })
    return res;
}
```
> 上面的方法可以进一步优化成为：

```
// 这样更简洁
function unique(matrix) {
    let res = {};
    matrix.map(item => {
        item.sort((a, b) => a - b);
        res[item] = item;
    })
    return Object.values(res);
}
```

### 2.适用于``纯文字字符数组矩阵``
```
// 本节用例：
// 纯文字字符数组矩阵
[
	["你的", "我", "它"],
    ["我", "你的", "它"],
    ["一", "二", "三"],
    ["三", "二", "一"],
    ["你d", "a", "它"],
    ["a", "你d", "它"],
    ["one", "two", "three"],
    ["three", "two", "one"]
]
```
> 分别利用对象属性名比较和ES6语法中的Set

#### (1) 利用属性名比较，将上面的方法稍微改动一下就可以实现
```
// 数组元素可能位置不同但元素内容相同，所以必须按照某一顺序对其进行排序，这里按首字母对字符串进行排序
function _unique(matrix) {
    let res = {};
    matrix.map(item => {
        item.sort((a, b) => a.localeCompare(b));
        res[item] = item;
    })
    return Object.values(res);
}
```
#### (2) 利用ES6语法中的Set，Set中的每个值都是唯一的
```
function _unique(matrix) {
    let res = [];
    matrix.map(item => {
        res.push(item.sort((a, b) => a.localeCompare(b)).toString());
    })
    // return Array.from(new Set(res)).map(item => item.split(','))
    return [...new Set(res)].map(item => item.split(','));// 上下等价
}
```
[源码在此](https://github.com/StarlightUnion/Blog-Content/tree/master/DataProcess/5.%E5%A4%9A%E7%BB%B4%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D)

