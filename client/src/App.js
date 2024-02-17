import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/gamePoll' component={GamePage}token={token}/>
        <PrivateRoute path="/add" component={PostNewQuestions} token={token}/>
        <PrivateRoute path='/userInfoPage' component={UserInfoPage} token={token}/>
        <PrivateRoute path='/leaderboard' component={LeaderBoard} token={token}/>
        <Route path='/loginPage'>
          <LoginPage setToken={setToken}/>
        </Route>
        <Route path='/registerPage' component={RegisterPage}/>
        <Route path='/404' component={Error404Page}/>
        <PrivateRoute path='/PostNewQuestions'component={PostNewQuestions} token={token}/>
        <Route exact path="/" >
          <LoginPage setToken={setToken}/>
        </Route>
        <PrivateRoute exact path="/homePage" component={HomePage} token={token}/>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}
function PrivateRoute({ component: Component, token, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        token ? <Component {...props} /> : <Redirect to="/loginPage" />
      )}
    />
  );
}
export default App;
