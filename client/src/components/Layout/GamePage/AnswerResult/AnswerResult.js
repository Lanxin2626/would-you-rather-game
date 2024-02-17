import React,{useState, useEffect}from 'react'
import './AnswerResult.css'
import { getQuestionById } from '../../../../services/questionsService';

const AnswerResult = (props) => {
  const [question, setQuestion] = useState(null);
  const userName = JSON.parse(sessionStorage.getItem('currentUser')).id;
  

  useEffect(() => {
    const fetchQuestion = async () => {
      const updatedQuestion = await getQuestionById(props.questionId);
      setQuestion(updatedQuestion);
      
    };

    fetchQuestion();
  }, [question]);
  if (!question) {
    return <div>Loading...</div>; // 或者显示其他加载指示
  }
  console.log(userName);
  const voteOne = question.optionOne.votes.length;
  const voteTwo = question.optionTwo.votes.length;
  const voteSum = voteOne + voteTwo;
  

  return (
    <div className='playGamePage'>
      <div className='pollTitle'>
        Would you rather
      </div>
      <div className='choicesGroup'>
        <div className={`resultOne ${question.optionOne.votes.includes(userName) ? 'userChoice' : ""}`}>
          {question.optionOne.votes.includes(userName) ? 'You chose' : ""}<br></br>
          <br></br>
          {voteSum===0? 0+"%":((voteOne / voteSum) * 100).toFixed(2) + '%'}<br></br>
          {voteOne + " people choose it"}<br></br>
          {question.optionOne.text}</div>

        <div className={`resultTwo ${question.optionTwo.votes.includes(userName) ? 'userChoice' : ""}`}>
          {question.optionTwo.votes.includes(userName) ? 'You chose' : ""}<br></br>
          <br></br>
          {voteSum===0? 0+"%":((voteTwo / voteSum) * 100).toFixed(2) + '%'}<br></br>
          {voteTwo + " people choose it"}<br></br>
          {question.optionTwo.text}</div>
      </div>
    </div>
  )
}

export default AnswerResult
