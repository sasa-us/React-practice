import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi sasa-us</h1>
        <p>sunny</p>
        <Person />
      </div>
    );
  }
}

export default App;
