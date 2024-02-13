import React from 'react'
import NewPoll from '../../components/Layout/PostNewQuestions/NewPoll/NewPoll'
import NavBar from '../../components/Common/NavBar'
import './PostNewQuestion.css'

const PostNewQuestions = () => {
  return (
    <div className='container'>
      <NavBar />
      <div className='content'>
        <div className='newPollPage'>
          <NewPoll />
        </div>
      </div>
    </div>
  )
}

export default PostNewQuestions
