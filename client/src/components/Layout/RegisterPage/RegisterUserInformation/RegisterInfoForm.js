import React from 'react'
import './RegisterInfoForm.css'

const RegisterInfoForm = () => {
  return (
    <div className='registerInfoForm'>
      <form action='#'>
        <div className='registerTitle'>
        <h2>Register Form</h2><br></br>
        </div>
        <div className='registerInputText'>
        <label>User Name   </label>
        <input className='inputText' type='text' /><br></br>
        <label>Password   </label>
        <input className='inputText' type='password' /><br></br>
        <label>Repeat your password  </label>
        <input className='inputText' type='password' /><br></br>
        </div>
        <div className='registerButton'>
        <input type="submit" className='inputText'value={'SUBMIT'}/>
        </div>
      </form>
    </div>
  )
}

export default RegisterInfoForm
