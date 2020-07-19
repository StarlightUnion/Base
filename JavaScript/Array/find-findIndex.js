// find()
// const array = [1, 2, 3, 4, 5, 6, 7];
// const res = array.find(item => item > 4);
// console.log(res);// 5


// const allMembers = [
//   {name: '张三', age: 21},
//   {name: '李思', age: 19},
//   {name: '王武', age: 27},
//   {name: '赵柳', age: 32},
//   {name: '韩起', age: 20}
// ];

// const _res = allMembers.find(item => {
//   return item.age > 25;
// });
// console.log(_res);// {name: "王武", age: 27}


// findIndex()
const array = [1, 2, 3, 4, 5, 6, 7];
const res = array.findIndex(item => item > 4);
console.log(res);// 4


const allMembers = [
  {name: '张三', age: 21},
  {name: '李思', age: 19},
  {name: '王武', age: 27},
  {name: '赵柳', age: 32},
  {name: '韩起', age: 20}
];

const _res = allMembers.findIndex(item => {
  return item.age > 25;
});
console.log(_res);// 2