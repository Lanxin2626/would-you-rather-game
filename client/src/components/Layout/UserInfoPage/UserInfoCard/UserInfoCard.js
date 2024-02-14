import React from 'react'
import './UserInfoCard.css'
import carImage from '../../../../assets/Avatars-upload/cat.png'

const UserInfoCard = () => {
    return (
        <div className='UserInfoCard'>
            <div className='avatar-container'>
                <img src={carImage} className='avatar-container-image'/>
                <button>upload</button>
            </div>
            <div className='userInformation'>
                <h4>UserId: xxxxx</h4>
                <h4>UserName: xxxxx</h4>
                <div className='passwordRow'>
                    <form>
                        <h4>Password:</h4>
                        <input type='password' />
                        <input type='submit' value={'submit'}/>
                    </form>
                </div>
            </div>
            <div className='userScoreCondition'>
                <h4>Score: x</h4>
                <h4>Numberof Answered Question: y</h4>
                <h4>Number of Created Question: Z</h4>
                <h3>UserRank: No.1</h3>
            </div>
        </div>
    )
}

export default UserInfoCard
