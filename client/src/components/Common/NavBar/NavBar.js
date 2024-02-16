import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import './NavBar.css'
import UserProfileArea from './UserProfileArea';
import { getLeaderBoard } from '../../../services/usersService'

const NavBar = () => {
  const history = useHistory();

  const handleNavLinkClick = async (requestFunction,route) => {
    try {
      const data =await requestFunction();
      history.push(route,{ data: data });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='nav'>
      <ul className='nav-links'>
        <li className="nav-item linkGroup">
          <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item linkGroup">
          <NavLink className="nav-link" activeClassName="active" to="/PostNewQuestions">New Poll</NavLink>
        </li>
        <li className="nav-item linkGroup">
          <NavLink className="nav-link" activeClassName="active" to="/leaderBoard" onClick={()=>handleNavLinkClick(getLeaderBoard, '/leaderBoard')}>Leader Board</NavLink>
        </li>
        <li className="nav-item userProfileArea ">
          <UserProfileArea/>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;