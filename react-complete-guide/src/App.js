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
  };

  switchNameHandler = (newName) => {
    console.log('clicked');
    this.setState({
      persons: [
        { name: newName, age: 6},
        { name: 'a', age: 0},
        { name: 'b', age: 0}
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'sasa-us', age: 6},
        { name: event.target.value, age: 0},
        { name: 'b', age: 0}
      ],
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid pink',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi sasa-us</h1>
  
        {/* <button onClick={this.switchNameHandler.bind(this,'cc')}>switch</button> */}
        <button style={style} onClick={ ()=>this.switchNameHandler('cc')}>switch</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'bb')}
                changed={this.nameChangedHandler}> 
                my hobbies :racing 
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
