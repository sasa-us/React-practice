import React from 'react';


const validation = (props) => {
    console.log(props); //{inputLength: x}

    let validationMsg = 'long enough';
    if(props.inputLength <=  5) {
        validationMsg = 'too short';
    }
    return (
        <div>
            <p>{validationMsg}</p>
        </div>
    );
}

export default validation;