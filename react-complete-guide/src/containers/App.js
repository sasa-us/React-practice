import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] constructor');
    
  }
  state = {
    persons: [
      { id: '1', name: 'sasa-us', age: 6},
      { id: '2', name: 'a', age: 3},
      { id: '3', name: 'b', age: 9}
    ],
    otherState: 'va',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[app,js] getDrivedStateFromProps', props);
    return state;
  }
  componentDidMount() {
    console.log('[app.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[app.js] shouldComponentUpdate');
    return true; //allow update
  }
  componentDidUpdate() {
    console.log('[app.js] componentDidUpdate');
  }
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

    this.setState( (prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
      
    });
    console.log('counter changed', this.state.changeCounter);
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

  loginHandler = () => {
    this.setState({authenticated : true});
  }


  render() {

    console.log('[app.js] render');
    let persons = null;
    

    if(this.state.showPersons) {
      //then set persons as jsx code
      persons = 
          <Persons persons={this.state.persons} 
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler} 
           isAuthenticated={this.state.authenticated}
           />
     
    }

   
    return (
      //use WithClass higher order component wrap other component
      //instead of div
        // <WithClass classes={classes.App}>
      <Aux>
        <button 
          onClick={() => {
            this.setState({showCockpit: false })
            }}
          >
            Remove Cockpit
        </button>
          {/* move all elem tag to cockpit component */}
          {/* <h1>Hi sasa-us</h1>
          <p className={assignedClasses.join(' ')}> name list</p> */}
          {/* <button onClick={this.switchNameHandler.bind(this,'cc')}>switch</button> */}
          {/* <button style={style} onClick={ ()=>this.switchNameHandler('cc')}>switch</button> */}
          {/* <StyledButton alt={this.state.showPersons} onClick={ this.togglePersonsHandler}>switch</StyledButton> */}
          {/* <button className={btnClass} onClick={ this.togglePersonsHandler}>switch</button> */}

          {this.state.showCockpit ? (
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
          /> 
          ) : null}
          
          {/* props should have persons showPersons clicked */}

          { persons }
        {/* </WithClass> */}
        </Aux>
      
    );
  }
}
//css module classes.App
export default withClass(App, classes.App);
