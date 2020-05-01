import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import PersonalPage from './components/protected/PersonalPage';
import PrivateRoute from './components/protected/ProtectedRoute';
import UpdateProfile from './components/protected/UpdateProfile';
import UpdatePlant from './components/protected/UpdatePlant';
import AddPlant from './components/protected/AddPlant';

function App () {
  localStorage.clear();
  return (
    <Router>
      <div className="background-image">
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />

          <PrivateRoute exact path="/protected" component={PersonalPage} />
          <PrivateRoute exact path="/profile" component={UpdateProfile} />
          <PrivateRoute exact path="/adding-plant" component={AddPlant} />
          <PrivateRoute exact path="/update-plant/:id" component={UpdatePlant} />
        </div>
      </div>
    </Router>
  );
}

export default App;
