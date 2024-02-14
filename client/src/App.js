import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import PostNewQuestions from './pages/PostNewQuestions'
import UserInfoPage from './pages/UserInfoPage'
import LeaderBoard from './pages/LeaderBoard'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Error404Page from './pages/Error_404Page'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/gamePoll'>
          <GamePage/>
        </Route>
        <Route path="/add">
          <PostNewQuestions/>
        </Route>
        <Route path='/userInfoPage'>
          <UserInfoPage/>
        </Route>
        <Route path='/leaderboard'>
          <LeaderBoard/>
        </Route>
        <Route path='/loginPage'>
          <LoginPage/>
        </Route>
        <Route path='/registerPage'>
          <RegisterPage/>
        </Route>
        <Route path='/404'>
          <Error404Page/>
        </Route>
        <Route path='/PostNewQuestions'>
          <PostNewQuestions/>
        </Route>        
        <Route exact path="/">
          <HomePage />
        </Route>     
      </Switch>
    </Router>
  );
}

export default App;
