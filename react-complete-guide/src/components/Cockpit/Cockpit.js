import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
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
        <h1>Hi sasa-us</h1>
        <p className={assignedClasses.join(' ')}> name list</p>
        <button className={btnClass} 
                onClick={ props.clicked}>switch
        </button>
    </div>
    
);
}

export default cockpit;