const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption....
  res
    .status(200)
    .send(Pets.get());
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  Pets.dequeue(type);
  People.dequeue();
  res.status(200).send(type);
});

module.exports = router;
