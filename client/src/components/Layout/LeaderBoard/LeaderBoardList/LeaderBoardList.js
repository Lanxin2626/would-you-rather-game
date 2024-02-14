import React from 'react'
import LeaderBoardUser from './LeaderBoardUser/LeaderBoardUser'
import './LeaderBoardList.css'

const LeaderBoardList = () => {
  return (
    <div className='LeaderBoardList'>
      <h2 className='board_Title'>Leader Board</h2>
      <div className='step2'>No.2</div>
      <LeaderBoardUser leaderBoardNo='User2'/>
      <div className='step1'>No.1</div>
      <LeaderBoardUser leaderBoardNo='User1'/>
      <div className='step3'>No.3</div>
      <LeaderBoardUser leaderBoardNo='User3'/>
    </div>
  )
}

export default LeaderBoardList
