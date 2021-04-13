// promise diy

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
  const _this = this;

  _this.state = PENDING;
  _this.value = null;
  _this.resolvedCallbacks = [];
  _this.rejectedCallbacks = [];

  // resolve
  function resolve(value) {
    if (_this.state === PENDING) {
      _this.state = RESOLVED;
      _this.value = value;
      _this.resolvedCallbacks.map(cb => cb(_this.value));
    }
  }

  // rejected
  function reject(value) {
    if (_this.state === PENDING) {
      _this.state = REJECTED;
      _this.value = value;
      _this.rejectedCallbacks.map(cb => cb(_this.value));
    }
  }

  // 执行
  try {
    fn(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// then
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const _this = this;

  onFulfilled = typeof onFulfilled === "function" ?
    onFulfilled :
    value => value;

  onRejected = typeof onRejected === "function" ?
    onRejected :
    err => {
      throw err;
    }

  if (_this.state === PENDING) {
    _this.resolvedCallbacks.push(onFulfilled);
    _this.rejectedCallbacks.push(onRejected);
  }

  if (_this.state === RESOLVED) onFulfilled(_this.value);

  if (_this.state === REJECTED) onRejected(_this.value);
}


// test
console.log("start");

new MyPromise((resolve, reject) => {
  // resolve(1);

  // setTimeout(() => {
  //   resolve(1)
  // }, 0)
}).then(value => {
  console.log(value)
});

console.log("end");