import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
