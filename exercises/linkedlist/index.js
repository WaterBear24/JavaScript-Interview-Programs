// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next)
        return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head)
      this.head = this.head.next;
  }

  removeLast() {
    if (this.head) {
      if (this.size() === 1)
        this.head = null;
      else {
        let newLast = this.getAt(this.size() - 2);
        newLast.next = null;
      }
    }
  }

  insertLast(data) {
    let node = this.getLast();
    node ? node.next = new Node(data) : this.head = new Node(data);
  }

  getAt(index) {
    let count = 0;
    let node = this.head;
    while (count < index && node) {
      node = node.next;
      count++;
    }
    return node;
  }

  removeAt(index) {
    if (index === 0)
      this.removeFirst();
    else {
      const prevNode = this.getAt(index - 1);
      const node = this.getAt(index);
      if (prevNode && node)
        prevNode.next = node.next;
    }
  }

  insertAt(data, index) {
    if (index === 0)
      this.insertFirst(data);
    else {
      const prevNode = this.getAt(index - 1);
      const node = this.getAt(index);
      if (prevNode) {
        let newNode = new Node(data);
        prevNode.next = newNode;
        newNode.next = node;
      } else {
        this.insertAt(data, this.size());
      }
    }
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  // Take note of this and mess with this more
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };