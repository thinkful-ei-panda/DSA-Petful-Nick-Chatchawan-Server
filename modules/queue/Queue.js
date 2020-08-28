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
    this.head === null ? this.head = newNode : this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    // Remove some data from the queue.

  }

  show() {
    // Return the next item in the queue.
  }

  all() {
    // Return all items in the queue.
  }
}

module.exports = Queue;
