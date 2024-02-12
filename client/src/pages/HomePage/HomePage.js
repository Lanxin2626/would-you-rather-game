import React from 'react'
import IsAnswerBar from '../../components/Layout/HomePage/IsAnswersBar/IsAnswerBar'
import QuestionsList from '../../components/Layout/HomePage/QuestionsList/QuestionsList'
import NavBar from '../../components/Common/NavBar'
import './HomePage.css'

const HomePage = () => {
  return (        
    <div className='container'>
      <NavBar/>
      <div className='home-page-content'>
      <IsAnswerBar/>
      <QuestionsList/>
      </div>
    </div>
  )
}

export default HomePage