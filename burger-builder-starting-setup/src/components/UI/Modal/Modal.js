import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => (
    // console.log(props);

    <div className={classes.Modal}>
        {props.children}
    </div>
);


export default modal;