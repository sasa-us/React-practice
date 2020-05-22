import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'sasa-us', age: 6},
      { id: '2', name: 'a', age: 3},
      { id: '3', name: 'b', age: 9}
    ],
    otherState: 'va',
    showPersons: false
  };

  // switchNameHandler = (newName) => {
  //   console.log('clicked');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 6},
  //       { name: 'a', age: 0},
  //       { name: 'b', age: 0}
  //     ],
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p=>{
      return p.id === id; //return true/false
      // return p.userid === id;
    });

    //get this person obj by fetch all property of old one
    const person = {
      ...this.state.persons[personIndex]
    }

    console.log( 'current person is ', person);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    //reference get pointer to old  throw warning
    // slice to create a copy of array then change 
    // const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
//toggle show div of person
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }


  render() {

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      //then set persons as jsx code
      persons = (
        <div>
          <Persons persons={this.state.persons} 
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler}  />
          {/* {
            this.state.persons.map((person, index) => {
//wrap Person in ErrorBoundary component
              return <ErrorBoundary  key={person.id}>
                      <Person 
                        name={person.name}
                        age={person.age}
                        click={ () => this.deletePersonHandler(index)}
                        changed={ (event) => this.nameChangedHandler(event, person.id)}
                      />
                      </ErrorBoundary>
            })} 
          */}
          </div>
      );
     //when show person change the button color
          btnClass = classes.Red;
    }

    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    } 
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi sasa-us</h1>
          <p className={assignedClasses.join(' ')}> name list</p>
          {/* <button onClick={this.switchNameHandler.bind(this,'cc')}>switch</button> */}
          {/* <button style={style} onClick={ ()=>this.switchNameHandler('cc')}>switch</button> */}
          {/* <StyledButton alt={this.state.showPersons} onClick={ this.togglePersonsHandler}>switch</StyledButton> */}
          <button className={btnClass} onClick={ this.togglePersonsHandler}>switch</button>

          
          { persons }
        </div>
      
    );
  }
}

export default App;
