import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../services/usersService';
import AvatarsChoiceArea from '../../components/Layout/RegisterPage/AvatarsChoiceArea/AvatarsChoiceArea'
import RegisterInfoForm from '../../components/Layout/RegisterPage/RegisterUserInformation/RegisterInfoForm'
import './RegisterPage.css'
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatarURL, setAvatarURL]=useState('');
  const originAvatar='/Avatars-origin/cat.png';

  const history = useHistory(); 
  const handleRegister = async (e) => {
    e.preventDefault();
    // 调用后端 API 注册用户
    try {
      console.log(avatarURL);
      if(avatarURL==='')
      {
        await registerUser(username, password, avatarURL===''? originAvatar: avatarURL);
        alert("Your Login UserID is "+ username.toLowerCase());
        history.push('/loginPage');
      }
      else{
        await registerUser(username, password, avatarURL);
        alert("Your Login UserID is "+ username.toLowerCase());
        history.push('/loginPage');
      }

    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed: '+ error);
    }
  };

  return (
    <div className='registerPage-container'>
      <div className='registerPage'>
        <AvatarsChoiceArea setAvatarURL={setAvatarURL}/>
        <RegisterInfoForm username={username} setUsername={setUsername}
        password={password} setPassword={setPassword} />
        <button className='registerButton' onClick={handleRegister}>Register</button>
      </div>
    </div>
  )
}

export default RegisterPage
