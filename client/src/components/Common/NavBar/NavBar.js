import React from 'react'
import { NavLink  } from 'react-router-dom';
import './NavBar.css'
import UserProfileArea from './UserProfileArea';

const NavBar = () => {
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
          <NavLink className="nav-link" activeClassName="active" to="/leaderBoard">Leader Board</NavLink>
        </li>
        <li className="nav-item userProfileArea ">
          <UserProfileArea/>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;