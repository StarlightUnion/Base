// Created by wxc on 2020/07/15

// const array = [1, 2, 3, 4, 5, 6];
// const res = array.every(item => item > 3);
// console.log(res);

// const _res = array.every(item => item >= 1);
// console.log(_res);


// 判断数组是否都满足某一条件
const allMembers = [
  {id: "1ac2", name: "张三", age: 21},
  {id: "vwrb", name: "李思", age: 19},
  {id: "34gc", name: "王武", age: 27},
  {id: "g245", name: "赵柳", age: 32},
  {id: "6ewq", name: "韩起", age: 20}
];

const res = allMembers.every(item => {
  return item.age > 21;
});
console.log(res);