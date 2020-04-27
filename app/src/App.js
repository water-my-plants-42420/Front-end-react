import React from 'react';
import { BrowesrRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Water My Plants</h1>
      <Route exact path="/Login" component={Login} />
    </div>
  );
}

export default App;
