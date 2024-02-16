import React from 'react'
import { useLocation } from 'react-router-dom';
import LeaderBoardList from '../../components/Layout/LeaderBoard/LeaderBoardList/LeaderBoardList'
import NavBar from '../../components/Common/NavBar'
import './LeaderBoard.css'

const LeaderBoard = () => {
  const location = useLocation();
  const data = location.state?.data; 
  return (
    <div className='container'>
      <NavBar />
      <div className='content'>
        <div className='LeaderBoard'>
          <LeaderBoardList/>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard
