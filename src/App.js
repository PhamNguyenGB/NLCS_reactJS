import './App.scss';
import Nav from './components/Navigation/nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>

  );
}

export default App;
