import React from 'react'
import './PlayGame.css'

const PlayGame = (props) => {
  return (
    <div className='playGamePage'>
      <div className='pollTitle'>
        Would you rather
      </div>
      <div className='choicesGroup'>
        <div className='choiceOne' >{props.question.optionOne.text}</div>
        <div className='choiceTwo'>{props.question.optionTwo.text}</div>
      </div>
    </div>
  )
}

export default PlayGame
