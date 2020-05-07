import React from 'react';

const char = (props) => {
console.log(props);
    const style = {
        display: 'inline-block',
        padding: '10px',
        margin: '19px',
        border: '1px solid red',
        textAlign: 'center'
    };
    return (
        <div style={style} onClick={props.clicked}> 
            {props.character}
        </div>
    );
}

export default char;