function observe (data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  Object.keys(data).forEach(function (key) {
    defineMVVM(data, key, data[key]);
  });
}

function defineMVVM (data, key, val) {
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      return val;
    },
    set: function (newVal) {
      val = newVal;
    }
  });
}