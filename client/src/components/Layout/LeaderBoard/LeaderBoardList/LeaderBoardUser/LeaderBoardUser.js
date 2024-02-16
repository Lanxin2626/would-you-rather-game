import React from 'react'
import './LeaderBoardUser.css'
import catImage from '../../../../../assets/Avatars-upload/cat.png'

const LeaderBoardUser = (props) => {
  return (
    <div className={props.leaderBoardNo}>
      <div className='LeaderBoardUser'>
        <h4>{props.userInfo.name}</h4>
        <img src={catImage} alt='' className='image_LeaderBoard'/>
        <div className='scoreConditionCard'>
          <h5>Score: {props.userInfo.questions.length+ Object.keys(props.userInfo.answers).length}</h5>
          <h5>Answered Questions: {props.userInfo.questions.length}</h5>
          <h5>Created Question: {Object.keys(props.userInfo.answers).length}</h5>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardUser
