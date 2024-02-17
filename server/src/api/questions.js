const express = require('express');
const { _getQuestions,_saveQuestionAnswer } = require('../utils/_DATA');

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
router.post('/saveUserAnswer',async(req,res)=>{
  const { authedUser, questionId, answer} = req.body;
  try{
    if (!authedUser || !questionId || !answer) {
      return res.status(400).json({ message: "Missing required fields" });
      
    }
    await _saveQuestionAnswer({authedUser, qid: questionId, answer});
    res.json({ message: 'Answer saved successfully' });
  }catch(error){
    res.status(500).json({ message: error.message });
  }
})
module.exports = router;