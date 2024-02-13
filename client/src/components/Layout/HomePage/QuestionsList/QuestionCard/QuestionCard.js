import React from 'react';
import catImage from '../../../../../../src/assets/Avatars-upload/cat.png';
import './QuestionCard.css'
const QuestionCard = () => {
  return (
    <div className='questionCard'>
        <div className='userName_poll'>
        <h2 >Samba ask:</h2>
        </div>
        <div className='cardImage_poll_container'>
        <img className='cardImage_poll'src={catImage} alt=''/>
        </div>
        <div className='question_poll'>
        <p ><span>Would you rather</span><br></br>
         live in city or ...</p>
         </div>
        <input type='button' className='button_poll'value='Answer this poll'/>
    </div>
  )
}

export default QuestionCard
