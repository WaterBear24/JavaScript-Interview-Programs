// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

// Solution #1 (my first solution) (cheated)
// function weave(sourceOne, sourceTwo) {
//   let weaveQueue = new Queue();
//   let counter = 0;
//   let s1Data = sourceOne.data;
//   let s2Data = sourceTwo.data;
//   while (counter < Math.max(s1Data.length, s2Data.length)) {
//     s1Popped = s1Data[s1Data.length - counter - 1];
//     s2Popped = s2Data[s2Data.length - counter - 1];
//     if (s1Popped)
//       weaveQueue.add(s1Popped);
//     if (s2Popped)
//       weaveQueue.add(s2Popped);
//     counter++;
//   }

//   return weaveQueue;
// }

// Solution #2 (my first solution not cheating) (hehahahah)
function weave(sourceOne, sourceTwo) {
  let weaveQueue = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek())
      weaveQueue.add(sourceOne.remove());
    if (sourceTwo.peek())
      weaveQueue.add(sourceTwo.remove());
  }
  return weaveQueue;
}

module.exports = weave;
