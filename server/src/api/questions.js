const express = require('express');
const { _getQuestions } = require('../utils/_DATA');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const questions = await _getQuestions();
    res.json(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;