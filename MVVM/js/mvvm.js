// Created by wxc on 2019/11/28
// Updated on 2019/11/28
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

    // 编译
    new compile(options.el, this);
}

// 实现数据劫持
function _observe(data) {
    for (let key in data) {
        let val = data[key];

        observe(val);// 实现深度数据劫持
        Object.defineProperty(data, key, {
            configurable: true,// 可编辑
            // enumerable: false,// 可枚举
            get() {
                return val;
            },
            set(newval) {
                if (val === newval) return;

                val = newval;
                observe(newval);
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

    while(child = vm.$el.firstChild) {
        fragment.appendChild(child);
    }

    // 查找和替换
    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g;

            if (node.nodeType === 3 && reg.test(txt)) {
                console.log(RegExp.$1);// 匹配的第一个分组
                let arr = RegExp.$1.split('.');
                let val = vm;

                arr.forEach(key => {
                    val = val[key];
                });

                node.textContent = txt.replace(reg, val).trim();
            }

            if (node.childNodes && node.childNodes.length) {
                replace(node);
            }
        });
    }

    replace(fragment);
    vm.$el.appendChild(fragment);
}