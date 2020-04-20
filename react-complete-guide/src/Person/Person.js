import React from 'react';

const person = (props) => {
    return (
        <div>

            <p>I'm {props.name}, a { props.age } year old  </p>
    <span>{props.children}</span>
            
        </div>
    
    );
}

export default person;