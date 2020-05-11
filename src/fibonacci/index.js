const slowFib = n => {
  if (n < 2) {
    return n;
  }

  return slowFib(n - 1) + slowFib(n - 2);
};

const memoize = fn => {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
};

const fibonacci = memoize(slowFib);

module.exports = fibonacci;
