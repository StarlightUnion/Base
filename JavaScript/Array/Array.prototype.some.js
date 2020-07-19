// Created by wxc on 2020/07/07

const array = [1, 2, 3, 4, 5, 6];
const res = array.some(item => item > 3);
console.log(res);

// 判断数组中是否存在某个值
const _res = array.some(item => item === 10);
console.log(_res);


// 检查是否有相等数据
// const array = [1, 2, 3, 4, 5, 6],
// _array = [11, 9, 20, 2];

// const res = array.some(item => {
//   return _array.some(_item => {
//     return item === _item;
//   })
// })

// console.log(res);// true


// 从两个数组中寻找第一个相同的数字
// const array = [1, 2, 3, 4, 5, 6],
// _array = [11, 9, 20, 2];
// let res;

// array.some(item => {
//   return _array.some(_item => {
//     if (item === _item) {
//       res = item;
//       return true;
//     }
//   })
// })

// console.log(res);// 2


const allMembers = [
  {id: "1ac2", name: "张三", age: 21},
  {id: "vwrb", name: "李思", age: 19},
  {id: "34gc", name: "王武", age: 27},
  {id: "g245", name: "赵柳", age: 32},
  {id: "6ewq", name: "韩起", age: 20}
];

let res1;
allMembers.some(item => {
  if (item.id === "vwrb") {
    res1 = item;
    return true;
  }
})

console.log(res1);// { id: 'vwrb', name: '李思', age: 19 }