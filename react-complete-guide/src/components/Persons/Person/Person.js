import React, {Component } from 'react';
// import classes from './Person.css';
import Aux from '../../../hoc/Aux';

// const person = (props) => {
// convert to class based
class Person extends Component {


    render() {

        // console.log(props.changed);
        console.log('[Person.js] rendering...');

        return (
            <Aux>  
                {/* <div className={classes.Person}> */}
                    <p onClick={this.props.click}>I'm {this.props.name}, { this.props.age } year old  </p>
                    <span>{this.props.children}</span>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/> 
                {/* </div>   */}
                
            {/* </Fragment>           */}
            </Aux>
        );
    }
}

export default Person;