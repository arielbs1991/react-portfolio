import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './components/Menu';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  document.title = "Ariel's Portfolio";


  return (
    <Router>
      <Wrapper>
        <Router>
          <Menu />
        </Router>
      </Wrapper>
    </Router>
  );
}

export default App;
