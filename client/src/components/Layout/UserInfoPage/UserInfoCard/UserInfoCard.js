import React from 'react'
import './UserInfoCard.css'
import { useLocation } from 'react-router-dom';

const UserInfoCard = () => {
    const location = useLocation();
    const data = location.state?.data;
    console.log(data);
    if (!data) {
      return <div className='UserInfocard'>Loading User Profile...</div>
    }
    return (
        <div className='UserInfoCard'>
            <div className='avatar-container'>
                <img src={data.avatarURL} className='avatar-container-image'/>
                <button className='btn upload'>+</button>
            </div>
            <div className='userInformation'>
                <h2>UserId: <span>{data.id}</span></h2>
                <h4>UserName: <span>{data.name}</span></h4>
                <div className='passwordRow'>
                    <form>
                        <h4>Password:</h4>
                        <input type='password' className='password'/>
                        <input type='submit' className='btn change' value={'change'}/>
                    </form>
                </div>
            </div>
            <div className='userScoreCondition'>
                <h3>Score: <span>{Object.keys(data.answers).length+data.questions.length}</span></h3>
                <h4>Number of Answered Question: <span>{Object.keys(data.answers).length}</span></h4>
                <h4>Number of Created Question: <span>{data.questions.length}</span></h4>
                <h3>UserRank: <span>No.{data.rank}</span></h3>
            </div>
        </div>
    )
}

export default UserInfoCard
