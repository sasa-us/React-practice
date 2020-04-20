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
        <Person name="sasa-us" age="6"/>
        <Person name="v" age="2"> my hobbies :racing </Person>
        <Person name="v" age="2"/>
      </div>
    );
  }
}

export default App;
