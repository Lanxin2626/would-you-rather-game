import React from 'react'
import { Link } from 'react-router-dom'
import catImage from '../../../../assets/Avatars-upload/cat.png';
import './UserProfileArea.css'


const UserProfileArea = () => {
  return (
    <div className='UserProfileArea'> 
      <div className='profileImage'>
      <Link to="#">
      <img  src={catImage} title='UserName: Samba'/>
      </Link>
      </div>
      <input className='btn Logout' type='button' value='Logout'/>
    </div>
  )
}

export default UserProfileArea
