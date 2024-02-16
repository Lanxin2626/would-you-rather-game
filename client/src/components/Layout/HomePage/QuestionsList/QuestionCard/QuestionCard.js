import React from 'react';
import './QuestionCard.css'
const QuestionCard = (props) => {

  const jumpToGamePage =()=>{
    
  }

  return (
    <div className='questionCard' key={props.key}>
        <div className='cardImage_poll_container'>
        <img className='cardImage_poll'src={props.question.avatarURL} alt=''/>
        </div>
        <div className='question_poll'>
        <h2 >{props.question.author} ask:</h2>
        <p ><span>Would you rather</span><br></br>
        {props.question.optionOne.text +" or ..."}</p>
         </div>
        <input type='button' className='button_poll'value='Answer this poll' onClick={()=>jumpToGamePage()}/>
    </div>
  )
}

export default QuestionCard
