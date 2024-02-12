import React from 'react'
import './IsAnswerBar.css'

const IsAnswerBar = () => {

  const liGroup= ['Unanswered','Answered'];
  return (
    <div className='isAnswerBar'>
      <ul className='isAnswered'>
        <li className='barLink active'>Unanswered</li>
        <li className='barLink '>Answered</li>
      </ul>
    </div>
  )
}

export default IsAnswerBar
