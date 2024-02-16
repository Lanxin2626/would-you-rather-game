import React from 'react'
import LeaderBoardUser from './LeaderBoardUser/LeaderBoardUser'
import './LeaderBoardList.css'
import { useLocation } from 'react-router-dom';

const LeaderBoardList = () => {
  const location = useLocation();
  const data = location.state?.data;
  if (!data) {
    return <div>Loading leaderboard...</div>
  }
  return (
    <div className='LeaderBoardList'>
      <h2 className='board_Title'>Leader Board</h2>
      <div className='step2'>No.2</div>
      <LeaderBoardUser userInfo={data[1]} leaderBoardNo='User2'/>
      <div className='step1' >No.1</div>
      <LeaderBoardUser userInfo={data[0]} leaderBoardNo='User1'/>
      <div className='step3'>No.3</div>
      <LeaderBoardUser userInfo={data[2]} leaderBoardNo='User3'/>
    </div>
  )
}

export default LeaderBoardList
