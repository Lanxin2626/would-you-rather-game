import React from 'react'
import './LeaderBoardUser.css'
import catImage from '../../../../../assets/Avatars-upload/cat.png'

const LeaderBoardUser = (props) => {
  return (
    <div className={props.leaderBoardNo}>
      <div className='LeaderBoardUser'>
        <h4>User Name</h4>
        <img src={catImage} alt='' className='image_LeaderBoard'/>
        <div className='scoreConditionCard'>
          <h5>Score: X</h5>
          <h5>Answered Questions: y</h5>
          <h5>Created Question: z</h5>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardUser
