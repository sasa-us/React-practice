import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'sasa-us', age: 6},
      { name: 'a', age: 3},
      { name: 'b', age: 9}
    ],
    otherState: 'va'
  }

  switchNameHandler = () => {
    console.log('clicked');
    this.setState({
      persons: [
        { name: 'sasa-us', age: 6},
        { name: 'a', age: 0},
        { name: 'x', age: 0}
      ],
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi sasa-us</h1>
        <p>sunny</p>
        <button onClick={this.switchNameHandler}>switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> my hobbies :racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
