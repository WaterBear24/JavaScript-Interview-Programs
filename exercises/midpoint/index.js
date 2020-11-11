// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// My first solution, I kind of cheated
// function midpoint(list) {
//   let node = list.getFirst();
//   let values = [];
//   while (node) {
//     values.push(node.data);
//     node = node.next;
//   }
//   console.log(values, 'length', values.length, 'midpoint', parseInt(values.length / 2));
//   return { data: values[Math.ceil(values.length / 2) - 1] };
// }

// Better solution
function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
