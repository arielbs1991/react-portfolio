import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './components/Menu';
import Wrapper from './components/Wrapper';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

function App() {
  document.title = "Ariel's Portfolio";

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Wrapper>
          <Router>
            <Menu />
          </Router>
        </Wrapper>
      </Router>
    </React.Fragment>
  );
}

export default App;
