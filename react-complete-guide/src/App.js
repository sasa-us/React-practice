import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
  // state = {
  //   persons: [
  //     { name: 'sasa-us', age: 6},
  //     { name: 'a', age: 3},
  //     { name: 'b', age: 9}
  //   ],
  //   otherState: 'va'
  // }

  //react hook
const app = props => {

  const [ personsState, setPersonsState] = useState({
    persons: [
          { name: 'sasa-us', age: 6},
          { name: 'a', age: 3},
          { name: 'b', age: 9}
        ],
        otherState: 'other state'
  });

  const [otherState, setOtherState] = useState('other state');
console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log('clicked');
    // this.setState({
      setPersonsState({
      persons: [
        { name: 'sasa-us', age: 6},
        { name: 'a', age: 0},
        { name: 'x', age: 0}
      ]
     // otherState: personsState.otherState
    })
  }
 
    return (
      <div className="App">
        <h1>Hi sasa-us</h1>
        <p>sunny</p>
        <button onClick={switchNameHandler}>switch</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> my hobbies :racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  }


export default app;
