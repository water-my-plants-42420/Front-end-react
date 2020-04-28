import React from 'react';
import { BrowesrRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

//redux stuff
import { connect } from 'react-redux';


import PrivateRoute from './components/protected/ProtectedRoute';
import PersonalSpace from './components/protected/PersonalPage';


function App(props) {
  return (
    <div className="App">
      <h1>Water My Plants</h1>
      {/*<Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
  <PrivateRoute exact path="/protected" component={PersonalSpace} /> */}
      <PersonalSpace />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    name: state.plantReducer.plantName,
    time: state.plantReducer.wateringTime,
  };
};
export default connect(mapStateToProps, {})(App);
