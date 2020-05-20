import React from 'react';
import classes from './Person.css';


const person = (props) => {

    console.log(props.changed);
   
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name}, { props.age } year old  </p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name}/> 
        </div>            
    
    );
}

export default person;