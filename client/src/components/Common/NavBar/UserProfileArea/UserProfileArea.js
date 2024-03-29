import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './UserProfileArea.css';
import { getUserInfo } from '../../../../services/usersService';

const UserProfileArea = () => {
  const history = useHistory();

  const handleLinkClick = async (route,requestFunction) => {
    try {
      const data =await requestFunction();
      console.log("userProfile "+ `User object: ${JSON.stringify(data)}`);
      history.push(route,{ data: data });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleLogout =()=>{
    sessionStorage.clear();
    history.push('/');
  }

  return (
    <div className='UserProfileArea'> 
      <div className='profileImage'>
      <Link to="/userInfoPage" onClick={()=>handleLinkClick('/userInfoPage',getUserInfo)} >
      <img  src={JSON.parse(sessionStorage.getItem('currentUser')).avatarURL} title={JSON.parse(sessionStorage.getItem('currentUser')).name}/>
      </Link>
      </div>
      <input className='btn Logout' type='button' value='Logout' onClick={handleLogout}/>
    </div>
  )
}

export default UserProfileArea
