import React from 'react'
import './UserInfoCard.css'
import carImage from '../../../../assets/Avatars-upload/cat.png'

const UserInfoCard = () => {
    return (
        <div className='UserInfoCard'>
            <div className='avatar-container'>
                <img src={carImage} className='avatar-container-image'/>
                <button className='btn upload'>+</button>
            </div>
            <div className='userInformation'>
                <h2>UserId: <span>xxx</span></h2>
                <h4>UserName: <span>xxx</span></h4>
                <div className='passwordRow'>
                    <form>
                        <h4>Password:</h4>
                        <input type='password' className='password'/>
                        <input type='submit' className='btn change' value={'change'}/>
                    </form>
                </div>
            </div>
            <div className='userScoreCondition'>
                <h3>Score: <span>x</span></h3>
                <h4>Number of Answered Question: <span>x</span></h4>
                <h4>Number of Created Question: <span>x</span></h4>
                <h3>UserRank: <span>No.1</span></h3>
            </div>
        </div>
    )
}

export default UserInfoCard
