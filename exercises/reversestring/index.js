// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution #1
  // return str.split('').reverse().join('');

  // Solution #2 (for every)
  // Not recommend to use this type of for loop
  // let strReverse = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   strReverse += str.charAt(i);
  // }
  // return strReverse;

  // Solution #3 (for of)
  // let strReverse = '';
  // for (let char of str) {
  //   strReverse = char + strReverse;
  // }
  // return strReverse;

  // Solution #4
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
