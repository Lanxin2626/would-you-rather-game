import React from 'react';
import './QuestionCard.css'
import { useHistory } from 'react-router-dom';
const QuestionCard = (props) => {

  const history = useHistory();

  const jumpToGamePage =()=>{
    history.push(`/gamePoll`, {questionId:props.questionId, isAnswered:props.isAnswered});
  }

  return (
    <div className='questionCard'>
        <div className='cardImage_poll_container'>
        <img className='cardImage_poll'src={props.question.avatarURL} alt=''/>
        </div>
        <div className='question_poll'>
        <h2 >{props.question.author} ask:</h2>
        <p ><span>Would you rather</span><br></br>
        {props.question.optionOne.text +" or ..."}</p>
         </div>
        <input type='button' className='button_poll'value={props.btnText} onClick={()=>jumpToGamePage()}/>
    </div>
  )
}

export default QuestionCard
