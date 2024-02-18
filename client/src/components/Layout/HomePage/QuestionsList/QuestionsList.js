import React from 'react'
import QuestionCard from './QuestionCard'
import './QuestionList.css'

const QuestionslIst = (props) => {
  if(props.questionsSet.length === 0)
  {
    return <div className='questionsList noQuestionText' style={props.style}>No more questions</div>
  }

  return (
    <div className='questionsList'  style={props.style}>
      {
        props.questionsSet.map((question)=>
        <QuestionCard key={question.id} questionId={question.id} question={question} btnText={props.btnText} isAnswered={props.isAnswered}/>
        )
      }
    </div>
  )
}

export default QuestionslIst
