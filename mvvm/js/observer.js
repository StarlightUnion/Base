function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  Object.keys(data).forEach(function (key) {
    defineMVVM(data, key, data[key]);
  });
}

function defineMVVM(data, key, val) {
  var subs = new subscribe();
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      subscribe.target && subs.add(subscribe.target);
      return val;
    },
    set: function (newVal) {
      console.log('变化', val, '->', newVal);
      val = newVal;
      subs.notify();
    }
  });
}

function subscribe() {
  this.subs = [];
}

subscribe.prototype = {
  add: function (item) {
    this.subs.push(item);
  },
  notify: function () {
    this.subs.forEach(function (item) {
      item.update();
    })
  }
}

subscribe.target = null;