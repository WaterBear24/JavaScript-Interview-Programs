// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #1 (my first solution)
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = '';
//     for (let k = 0; k < n - i; k++) {
//       str += ' ';
//     }
//     for (let k = 0; k < i * 2 - 1; k++) {
//       str += '#';
//     }
//     for (let k = 0; k < n - i; k++) {
//       str += ' ';
//     }
//     console.log(str);
//   }
// }

// Solution #2 (recursive)
// function pyramid(n, str = '#') {
//   if (n === 1)
//     console.log(str);
//   else {
//     let spaces = '';
//     for (let i = 1; i < n; i++) {
//       spaces += ' ';
//     }
//     console.log(spaces + str + spaces);
//     return pyramid(n - 1, "##" + str);
//   }
// }

// Solution #3 (recursive)
// function pyramid(n, str = '#', spaces = '') {
//   if (n === 1) {
//     console.log(str);
//   } else if (spaces.length > 0) {
//     console.log(spaces + str + spaces);
//     return pyramid(n - 1, '##' + str, spaces.slice(1));
//   } else {
//     for (let i = 1; i < n; i++) {
//       spaces += ' ';
//     }
//     // Should I console.log here and call pyramid(n - 1, '##' + str, spaces.slice(1)) ??
//     return pyramid(n, '#', spaces);
//   }
// }

// Solution #4
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

// Solution #5 (recursive)
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;
