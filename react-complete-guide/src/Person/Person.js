import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    console.log(props.changed);
    return (
        <div className="Person">

            <p onClick={props.click}>I'm {props.name}, { props.age } year old  </p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name}/> 
        </div>
    
    );
}

export default Radium(person);