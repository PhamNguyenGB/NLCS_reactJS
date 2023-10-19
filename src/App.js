import './App.scss';
import Nav from './components/Navigation/nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import AppRoute from './routes/AppRoute';
import NavAdmin from './components/Admin/Nav/NavAdmin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app-header'>
        <Nav />
        <NavAdmin />
      </div>
      <div className='App-container'>
        <AppRoute />
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
