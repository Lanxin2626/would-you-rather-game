import React,{useState}from 'react'
import QuestionCard from './QuestionCard'
import './QuestionList.css'

const QuestionslIst = () => {
  //let answeredQuestions=3;
  //let unAnsweredQuestions=4;
  return (
    <div className='questionsList'>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
    </div>
  )
}

export default QuestionslIst
