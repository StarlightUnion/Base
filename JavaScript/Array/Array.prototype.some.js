// Created by wxc on 2020/07/07


let array = [1, 2, 3, 4, 5, 6],
_array = [11, 9, 20, 2];

array.some(item => {
  return _array.some(_item => {
    if (item === _item) {
      console.log(item);
      return true;
    }
  })
})