// Created by wxc on 2019/11/28
// Updated on 2019/11/29
// source: https://mp.weixin.qq.com/s/fRFnuBqdHn5kBgWiPQR7ew

function MVVM(options = {}) {
    this.$options = options;
    let data = this._data = this.$options.data;

    // 数据劫持
    observe(data);

    for (let key in data) {
        Object.defineProperty(this, key, {
            configurable: true,
            get() {
                return this._data[key];
            },
            set(newval) {
                this._data[key] = newval;
            }
        })
    }

    // 初始化computed
    initComputed.call(this);
    // 编译
    new compile(options.el, this);
    options.mounted.call(this);
}

// 实现数据劫持
function _observe(data) {
    for (let key in data) {
        let val = data[key];
        let dep = new Dep();

        observe(val); // 实现深度数据劫持
        Object.defineProperty(data, key, {
            configurable: true, // 可编辑
            // enumerable: false,// 可枚举
            get() {
                Dep.target && dep.addSub(Dep.target);
                return val;
            },
            set(newval) {
                if (val === newval) return;

                val = newval;
                observe(newval);
                dep.notify();
            }
        });
    }
}

function observe(data) {
    if (!data || typeof data !== 'object') return;
    return new _observe(data);
}

// 编译
function compile(el, vm) {
    vm.$el = document.querySelector(el);
    let fragment = document.createDocumentFragment();

    while (child = vm.$el.firstChild) {
        fragment.appendChild(child); // 将el中的内容放入内存中
    }

    // 查找和替换
    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g;

            if (node.nodeType === 3 && reg.test(txt)) {
                // console.log(RegExp.$1);// 匹配的第一个分组
                function replaceTxt() {
                    node.textContent = txt.replace(reg, (matched, placeholder) => {
                        new Watcher(vm, placeholder, replaceTxt);
                        return placeholder.split('.').reduce((val, key) => {
                            return val[key];
                        }, vm);
                    });
                }

                // 替换
                replaceTxt();

                // let arr = RegExp.$1.split('.');
                // let val = vm;

                // arr.forEach(key => {
                //     val = val[key];
                // });

                // node.textContent = txt.replace(reg, val).trim();

                // // 监听变化
                // new Watcher(vm, RegExp.$1, newval => {
                //     node.textContent = txt.replace(reg, newval).trim();
                // })
            }

            if (node.nodeType === 1) {
                let nodeAttr = node.attributes;
                Array.from(nodeAttr).forEach(attr => {
                    let name = attr.name;
                    let exp = attr.value;

                    if (name.includes('v-')) {
                        node.value = vm[exp];
                    }

                    // 监听变化
                    new Watcher(vm, exp, function (newval) {
                        node.value = newvalue;
                    });

                    node.addEventListener('input', e => {
                        let newval = e.target.value;
                        vm[exp] = newval;
                    })
                })
            }

            if (node.childNodes && node.childNodes.length) {
                replace(node);
            }
        });
    }

    replace(fragment);
    vm.$el.appendChild(fragment);
}

// 发布订阅模式
function Dep() {
    this.subs = [];
}

Dep.prototype = {
    addSub(sub) {
        this.subs.push(sub);
    },
    notify() {
        this.subs.forEach(sub => sub.update());
    }
}

// 监听变化
function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;
    Dep.target = this;

    let arr = exp.split('.');
    let val = vm;

    arr.forEach(key => {
        val = val[key];
    })

    Dep.target = null;
}

Watcher.prototype.update = function () {
    let arr = this.exp.split('.');
    let val = this.vm;

    arr.forEach(key => {
        val = val[key]; // 取值默认调用get方法
    });

    this.fn(val);
}

function initComputed() {
    let vm = this;
    let computed = this.$options.computed;
    Object.keys(computed).forEach(key => {
        Object.defineProperty(vm, key, {
            get: typeof computed[key] === 'function' ? computed[key] : computed[key].get,
            set() {}
        })
    })
}