const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));
console.log(people.dequeue());
console.log(people.show());
console.log(people.all());
console.log(people);

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    return people.all();
  },

  enqueue(person) {
    // Add a person to the queue.
  },

  dequeue() {
    // Remove a person from the queue.
  },
};
