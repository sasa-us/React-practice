import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';


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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid pink',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightyellow',
        color: 'black'

      }
    }

    let persons = null;
    if(this.state.showPersons) {
      //then set persons as jsx code
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                        name={person.name}
                        age={person.age}
                        click={ () => this.deletePersonHandler(index)}
                        key={person.id}
                        changed={ (event) => this.nameChangedHandler(event, person.id)}
                      />
            })
          }


          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

          <Person name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'bb')}
                  changed={this.nameChangedHandler}> 
                  my hobbies :racing 
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div> 
      );
      style.backgroundColor = 'pink';

      //use radium
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    } 
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi sasa-us</h1>
        <p className={classes.join(' ')}> name list</p>
        {/* <button onClick={this.switchNameHandler.bind(this,'cc')}>switch</button> */}
        {/* <button style={style} onClick={ ()=>this.switchNameHandler('cc')}>switch</button> */}
        <button style={style} onClick={ this.togglePersonsHandler}>switch</button>
        { persons }
        </div>
    );
  }
}

export default Radium(App);
