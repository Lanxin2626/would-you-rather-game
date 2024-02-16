import React from 'react';
import './QuestionCard.css'
const QuestionCard = () => {
  return (
    <div className='questionCard'>
        <div className='cardImage_poll_container'>
        <img className='cardImage_poll'src="/Avatars-origin/cat.png" alt=''/>
        </div>
        <div className='question_poll'>
        <h2 >Samba ask:</h2>
        <p ><span>Would you rather</span><br></br>
         live in city or ...</p>
         </div>
        <input type='button' className='button_poll'value='Answer this poll'/>
    </div>
  )
}

export default QuestionCard
