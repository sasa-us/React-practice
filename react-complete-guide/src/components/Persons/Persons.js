import React,  { Component } from 'react';
import Person from './Person/Person';

// const persons = props => {
class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        //shallow comparison. just compare if same value/pointer
        if(nextProps.persons !== this.props.persons || 
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked) {
            return true;//when rerender, update it
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Perosn.js] componentDidUpdate');
    }
    //after toggle again hide the persons, it will run
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((person, index) => {
    
            return  (
                <Person
                    click={ () => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={ (event) => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}
                    
                    />
            )      
         });
    }
    
}


export default Persons;