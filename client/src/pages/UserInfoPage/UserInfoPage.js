import React from 'react'
import NavBar from '../../components/Common/NavBar'
import UserInfoCard from '../../components/Layout/UserInfoPage/UserInfoCard'

const UserInfoPage = () => {
  return (
    <div className='container'>
      <NavBar/>
      <div className='content'>
      <UserInfoCard/>
      </div>
    </div>
  )
}

export default UserInfoPage
