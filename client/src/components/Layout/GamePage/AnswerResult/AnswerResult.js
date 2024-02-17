import React from 'react'
import './AnswerResult.css'

const AnswerResult = (props) => {

  const userAnsInQuestions = JSON.parse(sessionStorage.getItem('currentUser')).answers;
  const userAnsInQuestion = userAnsInQuestions[props.questionId];
  const voteOne = props.question.optionOne.votes.length;
  const voteTwo = props.question.optionTwo.votes.length;
  const voteSum = voteOne + voteTwo;


  return (
    <div className='showResultPage'>
      <div className='pollTitle'>
        Would you rather
      </div>
      <div className='choicesGroup'>
        <div className={`resultOne ${userAnsInQuestion === 'optionOne' ? 'userChoice' : ""}`}>
          {userAnsInQuestion === 'optionOne' ? 'You chose' : ""}<br></br>
          <br></br>
          {voteSum===0? 0+"%":((voteOne / voteSum) * 100).toFixed(2) + '%'}<br></br>
          {voteOne + " people choose it"}<br></br>
          {props.question.optionOne.text}</div>

        <div className={`resultTwo ${userAnsInQuestion === 'optionTwo' ? 'userChoice' : ""}`}>
          {userAnsInQuestion === 'optionTwo' ? 'You chose' : ""}<br></br>
          <br></br>
          {voteSum===0? 0+"%":((voteTwo / voteSum) * 100).toFixed(2) + '%'}<br></br>
          {voteTwo + " people choose it"}<br></br>
          {props.question.optionTwo.text}</div>
      </div>
    </div>
  )
}

export default AnswerResult
