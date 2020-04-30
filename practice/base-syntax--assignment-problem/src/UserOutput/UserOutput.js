import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
   console.log(props);
    return (
        <div className="UserOutput">
            <p>name {props.userName}</p>
            <p>p2</p>
        </div>
    );
}
export default userOutput;