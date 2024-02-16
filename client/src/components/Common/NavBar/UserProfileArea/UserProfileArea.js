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

  return (
    <div className='UserProfileArea'> 
      <div className='profileImage'>
      <Link to="/userInfoPage" onClick={()=>handleLinkClick('/userInfoPage',getUserInfo)} >
      <img  src="/Avatars-origin/cat.png" title='UserName: Samba'/>
      </Link>
      </div>
      <input className='btn Logout' type='button' value='Logout'/>
    </div>
  )
}

export default UserProfileArea
