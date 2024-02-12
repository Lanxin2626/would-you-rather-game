import React from 'react'

const UserProfileArea = (userImageUrl) => {
  return (
    <div>
      <img className='profileImage' src='{userImageUrl}'/>
      <input className='Logout' type='button' value='Logout'/>
    </div>
  )
}

export default UserProfileArea
