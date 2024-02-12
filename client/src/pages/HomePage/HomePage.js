import React from 'react'
import IsAnswerBar from '../../components/Layout/HomePage/IsAnswersBar/IsAnswerBar'
import QuestionsList from '../../components/Layout/HomePage/QuestionsList/QuestionsList'
import NavBar from '../../components/Common/NavBar'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='container'>
      <NavBar />
      <div className='content'>
        <div className='homePageContent'>
          <IsAnswerBar />
          <QuestionsList />
        </div>
      </div>
    </div>
  )
}

export default HomePage