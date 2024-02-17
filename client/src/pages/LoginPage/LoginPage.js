import React from 'react'
import LoginForm from '../../components/Layout/LoginPage/LoginForm/LoginForm'
import Decoration from '../../components/Layout/LoginPage/Decoration/Decoration'
import './LoginPage.css'

const LoginPage = (props) => {
  return (
    <div className='container'>
      <div className='LoginPage'>
        <h1>Login Page</h1>
        <Decoration />
        <LoginForm setToken={props.setToken}/>
      </div>
    </div>
  )
}

export default LoginPage
