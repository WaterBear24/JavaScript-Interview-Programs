// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // Solution #1
  // let isPalindrome = true;
  // for (let i = 0; i < str.length / 2; i++) {
  //   if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
  // }
  // return isPalindrome;

  // Solution #2
  // return str === str.split('').reverse().join('');

  // Solution #3
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
