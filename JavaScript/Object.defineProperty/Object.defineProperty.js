// Created by wxc on 2019/07/21

// Object.defineProperty(obj, prop, descriptor) （对象，属性，属性描述符）

// 属性描述符
// 属性           默认值
// configurable  false     是否可以被删除
// enumerable    false     是否可以被for...in或Object.keys枚举
// writable      false     是否可以被修改
// get           undefined 当访问属性时触发
// set           undefined 当属性被修改时触发
// value         undefined 属性值


// 1.若使用Object.defineProperty定义属性，默认不可以被编辑、删除、枚举
let obj = {};
Object.defineProperty(obj, 'name', {
  value: "hangzhou"
});

obj.name = "";//{name:"hangzhou"} 无法编辑
delete obj.name;//{name:"hangzhou"} 无法删除
Object.keys(obj);//[] 无法枚举
Object.defineProperty(obj, 'name', {
  value: "shanghai"
});//Uncaught TypeError: Cannot redefine property: name 不能重复定义


// 2.若使用常规方法定义，默认可以编辑、删除、枚举
let obj1 = {};
obj1.name = "hangzhou";
obj1.name = "";//[name:""]
delete obj1.name;//{}
Object.keys(obj1);//{"name"}


// 3.使用属性描述符 (可编辑，可删除，可枚举)
// let与const的区别在于const定义的变量必须初始化，赋值之后不能修改
const obj2 = {};
Object.defineProperty(obj2, 'name', {
  value: 'hangzhou',
  writable: true,
  enumerable: true,
  configurable: true
});
obj2.name = "shanghai";//{name:"shanghai"}
delete obj2.name;//{}
Object.keys(obj2);//["name"]
Object.defineProperty(obj2, 'name', {
  value: "beijing"
});//{name:"beijing"}


// 4.使用属性描述符 (不可编辑，可删除，可枚举) 可通过Object.defineProperty()编辑
const obj3 = {};
Object.defineProperty(obj3, 'name', {
  value: 'hangzhou',
  writable: false,
  enumerable: true,
  configurable: true
});
obj3.name = "shanghai";//{name:"hangzhou"}
delete obj3.name;//{}
Object.keys(obj3);//["name"]
Object.defineProperty(obj3, 'name', {
  value: "shanghai"
});//{name:"shanghai"}


// 5.使用属性描述符 (不可编辑，不可删除，可枚举)
const obj4 = {};
Object.defineProperty(obj4, 'name', {
  value: 'hangzhou',
  writable: false,
  enumerable: true,
  configurable: false
});
obj4.name = "shanghai";//{name:"hangzhou"}
delete obj4.name;//{name:"hangzhou"}
Object.keys(obj4);//["name"]
Object.defineProperty(obj4, 'name', {
  value: "shanghai"
});//Uncaught TypeError: Cannot redefine property: name 不能重复定义


// 6.使用属性描述符 (只可枚举)
const obj5 = {};
Object.defineProperty(obj5, 'name', {
  value: 'hangzhou',
  enumerable: true
});
Object.defineProperty(obj5, 'provice', {
  value: "zhejiang",
  enumerable: false
});
Object.defineProperty(obj5, 'add', {
  value: (a, b) => {return a + b},
  enumerable: false
});
Obj5.district = "xiaoshan";
Object.keys(obj5);//["name", "district"]
Obj5.add(1, 2);//3

Obj5.propertyIsEnumerable('name');//true
Obj5.propertyIsEnumerable('provice');//false
Obj5.propertyIsEnumerable('add');//false


// Object.defineProperty() set & get
// 如果设置了get或set，就不能设置writable和value，二者不能共存
const o = {
  _name: ''
};

Object.defineProperty(o, "name", {
  enumerable: true,
  configurable: true,
  // writable: true
  // value: ''
  get: function () {
    return 'This is ' + this._name;
  },
  set: function (val) {
    this._name = val;
    localStorage.setItem('name', val);
  }
})
o.name = "shanghai";// {_name: "shanghai", name:"This is shanghai"}