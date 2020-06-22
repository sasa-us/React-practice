import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const toggelBtnRef = useRef(null);
    useEffect(() =>  {
        console.log('[Cockpit.js] useEffect');
        //beacause of second [] argument. 
        //this code exe only when mounted, and render 1st time
        //return exe when it unmounted

//if store timer, and clear it when it unmount the timer won't come out
        
        //const timer = setTimeout(() => {
        // setTimeout(() => {
        //     alert('saved data to cloud');
        // }, 2000);
       
        toggelBtnRef.current.click();


        return () => {
            // clearTimeout(timer);
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

//use app.js personsLength instead of 
// if(props.persons.length <= 2) {

 if(props.personsLength <= 2) {
   assignedClasses.push(classes.red);
 } 
 if(props.personsLength <= 1) {
   assignedClasses.push(classes.bold);
 }

return  (
    <div className={classes.Cockpit}>
        <h1>Hi {props.title}</h1>
        <p className={assignedClasses.join(' ')}> name list</p>
        <button ref={toggelBtnRef} className={btnClass} 
                onClick={ props.clicked}>switch
        </button>
        <button onClick={props.login}>Log in</button>
    </div>
    
);
}

export default React.memo(cockpit);