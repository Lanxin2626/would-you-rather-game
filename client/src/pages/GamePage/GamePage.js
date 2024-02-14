import React from 'react'
import PlayGame from '../../components/Layout/GamePage/PlayGame/PlayGame'
import NavBar from '../../components/Common/NavBar'
import './GamePage.css'

const GamePage = () => {
  return (
    <div className='contianer'>
      <NavBar />
      <div className='content'>
        <div className='gamePage'>
          <PlayGame />
        </div>
      </div>
    </div>
  )
}

export default GamePage
