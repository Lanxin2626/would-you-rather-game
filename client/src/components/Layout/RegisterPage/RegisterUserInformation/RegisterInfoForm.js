import React from 'react';
import './RegisterInfoForm.css'

const RegisterInfoForm = ({username,setUsername, password, setPassword}) => {
  
  return (
    <div className='registerInfoForm'>
      <form>
        <div className='registerTitle'>
        <h2>Register Form</h2><br></br>
        </div>
        <div className='registerInputText'>
        <label>User Name   </label>
        <input className='inputText' type='text' value={username} 
        onChange={(e) => setUsername(e.target.value)} required /><br></br>
        <label>Password   </label>
        <input className='inputText' type='password' value={password}
        onChange={(e) => setPassword(e.target.value)} required/><br></br>
        <label>Repeat your password  </label>
        <input className='inputText' type='password' required /><br></br>
        </div>
      </form>
    </div>
  )
}

export default RegisterInfoForm
