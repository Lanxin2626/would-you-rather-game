import React from 'react'
import './LoginForm.css'
import { login } from '../../../../services/usersService';
import {useState} from 'react';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      console.log('Login successful:', data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <div className='loginForm'>
      <form className='loginInfoForm' onSubmit={handleSubmit}>
        <div className='loginForm_UserName'>
          <label>User Name  </label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='loginForm_Password'>
          <label>Password  </label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='loginForm_Link'>
        <input className='loginForm_Submit'type='submit' value={'SUBMIT'}/><br></br>
        <a href='#'> Forget your password? </a>
        <a href='#'> register </a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
