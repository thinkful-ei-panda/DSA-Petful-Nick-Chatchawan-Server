const e = require("express");

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const newNode = new _Node(data, null);
    this.head === null ? (this.head = newNode) : (this.tail.next = newNode);
    this.tail = newNode;
  }

  dequeue() {
    // Remove some data from the queue
    if (this.head === null)
      return 'Queue is empty';

    const value = this.head.data;
    this.head = this.head.next;
    return value;
  }

  show() {
    // Return the next item in the queue
    return this.head.data;
  }

  all() {
    // Return all items in the queue
    const queueArray = [];
    let pointer = this.head;
    while (pointer !== null) {
      queueArray.push(pointer.data);
      pointer = pointer.next;
    }
    return queueArray;
  }
}

module.exports = Queue;
