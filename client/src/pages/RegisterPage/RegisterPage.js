import React from 'react'
import AvatarsChoiceArea from '../../components/Layout/RegisterPage/AvatarsChoiceArea/AvatarsChoiceArea'
import RegisterInfoForm from '../../components/Layout/RegisterPage/RegisterUserInformation/RegisterInfoForm'
import './RegisterPage.css'
const RegisterPage = () => {
  return (
    <div className='registerPage-container'>
      <div className='registerPage'>
        <AvatarsChoiceArea />
        <RegisterInfoForm />
      </div>
    </div>
  )
}

export default RegisterPage
