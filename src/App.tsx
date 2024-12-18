import React, { useEffect, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dashboard from './components/dashboard/Dasboard';


const App = () => {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
