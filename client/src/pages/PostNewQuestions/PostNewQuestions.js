import React from 'react'
import NewPoll from '../../components/Layout/PostNewQuestions/NewPoll/NewPoll'
import NavBar from '../../components/Common/NavBar'

const PostNewQuestions = () => {
  return (
    <div className='container'>
      <NavBar/>
      <div className='content'>
      PostNewQuestions
      <NewPoll/>
      </div>
    </div>
  )
}

export default PostNewQuestions
