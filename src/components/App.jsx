import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Boilerplate</h1>
        </header>
      </div>
    );
  }
}
export default App;
