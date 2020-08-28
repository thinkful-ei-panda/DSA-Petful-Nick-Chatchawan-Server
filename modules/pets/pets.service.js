const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const response = {};
    response.dog = pets.dogs.show();
    response.cat = pets.cats.show();
    return response;
  },

  dequeue(type) {
    // Remove a pet from the queue.
    type === 'dog' ? pets.dogs.dequeue() : pets.cats.dequeue();
  },
};
