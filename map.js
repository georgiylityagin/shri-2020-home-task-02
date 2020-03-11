(() => {
  const promisifyAsyncFunction = (fn, ...args) => {
    return new Promise(resolve => {
      fn(...args, result => resolve(result));
    });
  }

  const map = async (array, fn, cb) => {
    let length = await promisifyAsyncFunction(array.length);
    let results = new AsyncArray();

    let index = 0;
    let check = await promisifyAsyncFunction(less, index, length)

    while (check) {
      let currentValue = await promisifyAsyncFunction(array.get, index);
      let newValue = fn(currentValue, index, array);
      promisifyAsyncFunction(results.push, newValue);

      index = await promisifyAsyncFunction(add, index, 1);
      check = await promisifyAsyncFunction(less, index, length);
    }

    cb(results);
  };

  window.map = map;

})();

