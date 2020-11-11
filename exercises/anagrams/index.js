// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Solution #1
  // let aChars = buildCharMap(stringA);
  // let bChars = buildCharMap(stringB);
  // if (Object.keys(aChars).length !== Object.keys(bChars).length)
  //   return false;
  // for (let element in aChars) {
  //   if (aChars[element] !== bChars[element])
  //     return false;
  // }
  // return true;

  // Solution #2
  const cleanA = cleanString(stringA);
  const cleanB = cleanString(stringB);
  return cleanA === cleanB;
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function buildCharMap(str) {
  let charMap = {}

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
