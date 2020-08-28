const Queue = require('../queue/Queue');
const store = require('../../store');
const Pets = require('./pets.service');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

setInterval(generateInteraction(), 5000);

function generateInteraction() {
  if (store.people.includes(people.show())) {
    people.enqueue(people.dequeue());

    const roll = getRandomInt(2);

    if (roll === 0)
      Pets.dequeue('cat');
    if (roll === 1)
      Pets.dequeue('dog');
    if (roll === 2) {
      Pets.dequeue('cat');
      Pets.dequeue('dog');
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  get() {
    // Return all people in the queue.
    return people.all();
  },

  enqueue(person) {
    // Add a person to the queue.
    people.enqueue(person);
    return person;
  },

  dequeue() {
    // Remove a person from the queue.
    return people.dequeue();
  },
};
