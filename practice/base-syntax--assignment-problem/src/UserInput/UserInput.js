import React from 'react';

const userInput = (props) => {

    const inputstyle = {
        border: '3px solid red'
    }
    console.log(props);
    return <input type="text" 
                    onChange={props.changed} 
                    value={props.currentName}
                    style={inputstyle}
                    />;
}

export default userInput;