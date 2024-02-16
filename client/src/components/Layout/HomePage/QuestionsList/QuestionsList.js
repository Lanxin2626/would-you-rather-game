import React from 'react'
import QuestionCard from './QuestionCard'
import './QuestionList.css'

const QuestionslIst = (props) => {
  if(props.questionsSet.length===0)
  {
    return <div className='questionsList'></div>
  }

  return (
    <div className='questionsList' style={props.style} >
      {
        props.questionsSet.map((question)=>
        <QuestionCard key={question.id} question={question}/>
        )
      }
    </div>
  )
}

export default QuestionslIst
