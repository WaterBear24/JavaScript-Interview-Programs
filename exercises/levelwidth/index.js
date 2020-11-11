// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//    0
//  / | \
// 1  2  3
// |     |
// 4     5
// Answer: [1, 3, 2]

// My Solution
// function levelWidth(root) {
//   let widths = [1];
//   let index = 0;
//   let values = [root];
//   while (values.length) {
//     let total = 0;
//     for (let i = 0; i < widths[index]; i++) {
//       let node = values.shift();
//       total += node.children.length;
//       values.push(...node.children);
//     }
//     if (total)
//       widths.push(total);
//     index++;
//   }
//   return widths;
// }

// 2nd Solution
function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();
    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
