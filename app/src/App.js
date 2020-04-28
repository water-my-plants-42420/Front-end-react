import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
//import Login from './components/Login';

//redux stuff
import { connect } from 'react-redux';

function App(props) {
  return (
    <Router>
      <div className="App">
        <h1>Water My Plants</h1>
        {props.name} {props.time}
        <Route exact path="/Login" component={Login} />
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    name: state.plantReducer.plantName,
    time: state.plantReducer.wateringTime,
  };
};
export default connect(mapStateToProps, {})(App);
