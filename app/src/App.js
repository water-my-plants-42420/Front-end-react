import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

//redux stuff
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="background-image">
      <div className="App">
        {/* <h1>Water My Plants</h1>
      {props.name} {props.time} */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
      </div>
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
