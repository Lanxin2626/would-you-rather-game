const express = require('express');
const { _getQuestions } = require('../utils/_DATA');

const router = express.Router();

router.get('/getAllQuestions', async (req, res) => {
  try {
    const questions = await _getQuestions();
    res.json(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/getQuestionById/:questionId', async (req, res) => {
  try {
    const questions = await _getQuestions();
    const questionId = req.params.questionId;
    console.log(questionId);
    const question = questions[questionId];
    if (question) {
      res.json(question);
    } else {
      res.status(404).send('Question not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;