import React from 'react'

const AnswerResult = () => {
  return (
    <div className='showResultPage'>
      <div className='pollTitle'>
        Would you rather
      </div>
      <div className='choicesGroup'>
        <div className='choiceOne userChoseIt' value={'choice one'} isUserChoice={true}/>
        <div className='choiceTwo' value={'choice two'} isUserChoice={false}/>
      </div>
    </div>
  )
}

export default AnswerResult
