import React from 'react'
import './IsAnswerBar.css'

const IsAnswerBar = (props) => {

  const handleTabClick = (tab) => {
    props.setIsAnswer(tab);
    console.log("New isAnswer value:", tab);
  };

  return (
    <div className='isAnswerBar'>
      <ul className='isAnswered'>
        <li className={`barLink ${props.isAnswer === false ? 'active' : ''}`}
        onClick={() => handleTabClick(false)}>Unanswered</li>
        <li className={`barLink ${props.isAnswer === true ? 'active' : ''}`}
        onClick={() => handleTabClick(true)}>Answered</li>
      </ul>
    </div>
  )
}

export default IsAnswerBar
