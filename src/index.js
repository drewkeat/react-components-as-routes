import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar';

ReactDOM.render(
  <div>
    <Router>
      <Navbar />
      <Route exact path = "/" component={Home} />
      <Route path = "/about" component={About} />
      <Route path = "/login" component={Login} />
      <Route path = "/signup" component={Signup} />
    </Router>
  </div>,
  document.getElementById('root')
);
