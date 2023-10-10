import './App.scss';
import Nav from './components/Navigation/nav';
import Login from './components/Login/Login';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App-container'>
        <Nav />
        <Switch>
          <Route path="/about">
            About
          </Route>
          <Route path="/news">
            News
          </Route>
          <Route path="/contact">
            Contact
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
