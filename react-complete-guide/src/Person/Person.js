import React from 'react';

const person = (props) => {
    console.log(props.changed);
    return (
        <div>

            <p onClick={props.click}>I'm {props.name}, { props.age } year old  </p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} /> 
        </div>
    
    );
}

export default person;