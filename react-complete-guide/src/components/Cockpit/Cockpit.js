import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() =>  {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('saved data to cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit.js cleanup useEffect() ]');
        }
    }, []); //end useEffect()

    useEffect(() =>  {
        console.log('[Cockpit.js] 2nd useEffect without 2nd argumnet');
        return () => {
            console.log('[Cockpit.js] cleanup in 2nd useEffect() ' );
        }
    });

console.log('cockpit props is ', props);
// cockpit props is  {showPersons: false, persons: Array(3), clicked: ƒ}
 
// let classes = ['red', 'bold'].join(' ');
 let assignedClasses = [];
 let btnClass = '';
 if(props.showPersons) {
      //when show person change the button color
    btnClass = classes.Red;
 }


 if(props.persons.length <= 2) {
   assignedClasses.push(classes.red);
 } 
 if(props.persons.length <= 1) {
   assignedClasses.push(classes.bold);
 }

return  (
    <div className={classes.Cockpit}>
        <h1>Hi {props.title}</h1>
        <p className={assignedClasses.join(' ')}> name list</p>
        <button className={btnClass} 
                onClick={ props.clicked}>switch
        </button>
    </div>
    
);
}

export default cockpit;