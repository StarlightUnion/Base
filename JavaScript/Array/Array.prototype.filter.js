// Created by wxc on 2020/07/06

// 简单使用
const res = [1, 2, 3, 4, 5].filter(item => {
  return item <= 3;
});

console.log(res);// [1, 2, 3]


// 进阶 对由数组对象 按其某一个属性进行过滤
const allMembers = [
  {name: '张三', age: 21},
  {name: '李思', age: 19},
  {name: '王武', age: 27},
  {name: '赵柳', age: 32},
  {name: '韩起', age: 20}
];

let member = allMembers.filter(item => {
  return item.age >= 20;
})

console.log(member);
// [{name: "张三", age: 21},
// {name: "王武", age: 27},
// {name: "赵柳", age: 32},
// {name: "韩起", age: 20}]


// 高阶 结合map等方法进行链式调用处理过滤后数组
let member1 = allMembers.filter(item => {
  return item.age >= 20;
}).map(item => {
  return item.name;
})

console.log(member1);// ["张三", "王武", "赵柳", "韩起"]

// 排序
let member2 = allMembers.filter(item => {
  return item.age >= 20;
}).sort((a, b) => {
  return a.age - b.age;
})

console.log(member2);
// [{name: "韩起", age: 20},
// {name: "张三", age: 21},
// {name: "王武", age: 27},
// {name: "赵柳", age: 32}]

// 获取过滤之后剩余的数组成员
let member4 = [];
let member3 = allMembers.filter((item) => {
  if (item.age >= 20) {
    return true;
  } else {
    member4.push(item);
    return false;
  }
})

console.log(member3);
// [{name: "韩起", age: 20},
// {name: "张三", age: 21},
// {name: "王武", age: 27},
// {name: "赵柳", age: 32}]
console.log(member4);
// [{name: "李思", age: 19}]


const _allMembers = [1, 10, 12, 9, 3, 2, 1, 10, null, undefined, null, [], [1], []];
let _res = _allMembers.filter((item, index, array) => {
  return array.indexOf(item) === index;
})

console.log(_res);// [1, 10, 12, 9, 3, 2]