import React from 'react';

const person = (props) => {
    return (
        <div>

            <p onClick={props.click}>I'm {props.name}, a { props.age } year old  </p>
    <span>{props.children}</span>
            
        </div>
    
    );
}

export default person;