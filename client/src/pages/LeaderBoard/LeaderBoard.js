import React from 'react'
import LeaderBoardList from '../../components/Layout/LeaderBoard/LeaderBoardList/LeaderBoardList'
import NavBar from '../../components/Common/NavBar'

const LeaderBoard = () => {
  return (
    <div>
      <NavBar/>
      Leaderboard
      <LeaderBoardList/>
    </div>
  )
}

export default LeaderBoard
