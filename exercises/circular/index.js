// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// My first solution
// function circular(list) {
//   let node = list.getFirst();
//   while (node) {
//     let node2 = list.getFirst();
//     while (node2 !== node) {
//       if (node.next === node2) {
//         return true;
//       }
//       node2 = node2.next;
//     }
//     node = node.next;
//   }
//   return false;
// }

// Slow/Fast solution (better)
function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

module.exports = circular;
