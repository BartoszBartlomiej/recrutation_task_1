import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Button from "./components/Button/Button"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button>THIS IS SCSS STYLED BUTTON</Button>
        </header>
      </div>
    );
  }
}

export default App;
