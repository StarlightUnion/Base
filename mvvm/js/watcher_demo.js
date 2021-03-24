// Created by wxc on 2019/11/29
// source: https://mp.weixin.qq.com/s/fRFnuBqdHn5kBgWiPQR7ew

function Dep() {
  this.subs = []; // 存放函数 事件池
}

Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub);
  },
  notify() {
    this.subs.forEach(sub => sub.update());
  }
};

// 监听
function Watcher(fn) {
  this.fn = fn;
}

Watcher.prototype.update = function () {
  this.fn();
};

let watcher = new Watcher(() => console.log(1));
let dep = new Dep();
dep.addSub(watcher);
dep.addSub(watcher);
dep.notify(); // 1 1