import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='loginForm'>
      <form className='loginInfoForm'>
        <div className='loginForm_UserName'>
          <label>User Name  </label>
          <input type='text' />
        </div>
        <div className='loginForm_Password'>
          <label>Password  </label>
          <input type='password' />
        </div>
        <div className='loginForm_Link'>
        <input className='loginForm_Submit'type='submit' value={'SUBMIT'}/><br></br>
        <a href='#'> Forget your password? </a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
