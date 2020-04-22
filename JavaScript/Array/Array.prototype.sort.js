// Created by wxc on 2020/04/21

const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort());// [ 'Dec', 'Feb', 'Jan', 'March' ]

const txts = ['ability', 'absent', 'April', 'divide', 'center', 'context', 'container'];
console.log(txts.sort());// ['April', 'ability', 'absent', 'center', 'container', 'context', 'divide']

const array = [1, 30, 4, 21, 10000, 81, 111, 999];
// console.log(array.sort());// [1, 10000, 111, 21, 30, 4, 81, 999]

// 指定排序规则 arr.sort([compareFunction])
// 升序
console.log(array.sort((a, b) => {
  return a - b;
}));// [1, 4, 21, 30, 81, 111, 999, 10000]
console.log(array);// 将直接在 原数组 上进行修改

// 降序
console.log(array.sort((a, b) => {
  return b - a;
}));// [10000, 999, 111, 81, 30, 21, 4, 1]

//
const members = [
  { name: 'Dave', age: 32 },
  { name: 'Jeff', age: 58 },
  { name: 'Mona', age: 15 },
  { name: 'Ma', age: 45 },
  { name: 'Lord', age: 79 }
]

console.log(members.sort((a, b) => {
  return a.age - b.age;
}));
// [
//   { name: 'Mona', age: 15 },
//   { name: 'Dave', age: 32 },
//   { name: 'Ma', age: 45 },
//   { name: 'Jeff', age: 58 },
//   { name: 'Lord', age: 79 }
// ]

console.log(members.sort((a, b) => {
  const a_name = a.name.toUpperCase();
  const b_name = b.name.toUpperCase();

  if (a_name > b_name) {
    return 1;
  } else if (a_name < b_name) {
    return -1;
  } else {
    return 0;
  }
}));

// const compare = () => {}