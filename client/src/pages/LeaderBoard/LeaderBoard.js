import React from 'react'
import LeaderBoardList from '../../components/Layout/LeaderBoard/LeaderBoardList/LeaderBoardList'
import NavBar from '../../components/Common/NavBar'

const LeaderBoard = () => {
  return (
    <div className='container'>
      <NavBar/>
      <div className='content'>
      Leaderboard
      <LeaderBoardList/>
      </div>
    </div>
  )
}

export default LeaderBoard
