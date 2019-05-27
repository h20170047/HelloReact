import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './components/history';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Route exact path='/' component={Login}/>
      <Route path='/register' component={Register}/>
    </div>
    </Router>
  );
}

export default App;
