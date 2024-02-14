import React from 'react'
import './PlayGame.css'

const PlayGame = () => {
  return (
    <div className='playGamePage'>
      <div className='pollTitle'>
        Would you rather
      </div>
      <div className='choicesGroup'>
        <div className='choiceOne' isUserChoice={true} choiceContent='choice one'>choice one</div>
        <div className='or'>or</div>
        <div className='choiceTwo' isUserChoice={false} choiceContent='choice two'>choice two</div>
      </div>
    </div>
  )
}

export default PlayGame
