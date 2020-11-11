// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// My solution
// function validate(node, min = null, max = null) {
//   if (node.left) {
//     const isGreaterThan = min ? node.left.data > min : true;
//     return node.left.data < node.data && isGreaterThan ? validate(node.left, min, node.data) : false;
//   }
//   if (node.right) {
//     const isLessThan = max ? node.right.data < max : true;
//     return node.right.data > node.data && isLessThan ? validate(node.left, node.data, max) : false;
//   }
//   return true;
// }

// 2nd Solution
function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
