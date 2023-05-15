const express = require('express');
const trainerController = require('../controllers/trainer');

const router = express.Router();

router
  .get('/', trainerController.getAllTrainers)
  .get('/:id', trainerController.getTrainerById);

module.exports = router;