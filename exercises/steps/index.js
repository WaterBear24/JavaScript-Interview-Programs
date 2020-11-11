// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1 (my first solution)
// function steps(n) {
//   for (let r = 0; r < n; r++) {
//     let str = '';
//     for (let c = 0; c < n; c++) {
//       str += (c <= r ? '#' : ' ');
//     }
//     console.log(str);
//   }
// }

// Solution #2 (recursive)
// function steps(n, str = "#") {
//   if (n === 1)
//     console.log(str);
//   else {
//     let stair = str;
//     for (let i = 1; i < n; i++)
//       stair += ' ';
//     console.log(stair);
//     steps(n - 1, '#' + str);
//   }
// }

// Solution #3 (recursive)
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}

module.exports = steps;
