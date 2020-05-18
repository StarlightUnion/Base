// Created by wxc on 2020/05/18

// 获取小数部分长度
function getDecimalLength (num) {
  let len = 0;

  try {
    let _num = Number(num);
    let strArr = (_num + '').split('.');

    if (strArr.length === 2) {
      len = parseInt(strArr[1]) === 0 ? 0 : strArr[1].length;
    } else {
      len = 0;
    }
  } catch (e) {
    throw e;
  }

  return len;
}

// +
function add (num1, num2) {
  let dl1 = getDecimalLength(num1),// 小数长度1
  dl2 = getDecimalLength(num2),// 小数长度2
  n;// 倍数

  n = Math.pow(10, Math.max(dl1, dl2));
  return Math.round(Number(num1) * n + Number(num2) * n) / n;
}

// -
function subtract (num1, num2) {
  let dl1 = getDecimalLength(num1),
  dl2 = getDecimalLength(num2),
  n;

  n = Math.pow(10, Math.max(dl1, dl2));
  return Math.round(Number(num1) * n - Number(num2) * n) / n;
}

// *
function multiply (num1, num2) {
  let dl1 = getDecimalLength(num1),
  dl2 = getDecimalLength(num2),
  n;

  n = Math.pow(10, Math.max(dl1, dl2));
  return (Number(num1) * n) * (Number(num2) * n) / (n * n);
}

// /
function divide (num1, num2) {
  let dl1 = getDecimalLength(num1),
  dl2 = getDecimalLength(num2),
  n;

  n = Math.pow(10, Math.max(dl1, dl2));
  return (Number(num1) * n) / (Number(num2) * n);
}