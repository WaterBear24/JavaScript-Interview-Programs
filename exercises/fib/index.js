// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution #1 (my first solution) (recursive)
// function fib(n) {
//   return n < 2 ? n : fib(n - 1) + fib(n - 2);
// }

// Solution #2
// function fib(n) {
//   let series = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     series[i] = series[i - 1] + series[i - 2];
//   }
//   return series[n];
// }

// Solution #3 (memoization && recursion)
function slowFib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    // Why don't people just do 'fn(...args)'?
    const result = fn(...args);
    cache[args] = result;

    return result;
  };
}

const fib = memoize(slowFib);

module.exports = fib;
