import React from 'react'
import { useHistory } from 'react-router-dom';
import './PlayGame.css'
import '../AnswerResult/AnswerResult.css'
import { saveUserAnswer } from '../../../../services/questionsService'

const PlayGame = (props) => {
  const history = useHistory();

  const user=JSON.parse(sessionStorage.getItem('currentUser'));
  const handleGameClickAns= async(option)=>{
    console.log("play game "+user.id+' '+props.question.id+' '+option);
    await saveUserAnswer(user.id,props.question.id,option);
    history.push(`/gamePoll`, {questionId:props.question.id, isAnswered:true});

  }

  return (
    <div className='playGamePage'>
      <div className='pollTitle'>
        Would you rather
      </div>
      <div className='choicesGroup'>
        <div className='choiceOne' onClick={()=>handleGameClickAns('optionOne')} >{props.question.optionOne.text}</div>
        <div className='choiceTwo' onClick={()=>handleGameClickAns('optionTwo')}>{props.question.optionTwo.text}</div>
      </div>
    </div>
  )
}

export default PlayGame
