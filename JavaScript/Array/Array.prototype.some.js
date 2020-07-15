// Created by wxc on 2020/07/07


// 检查是否有相等数据
let array = [1, 2, 3, 4, 5, 6],
_array = [11, 9, 20, 2];

const res = array.some(item => {
  return _array.some(_item => {
    return item === _item;
  })
})

console.log(res);
