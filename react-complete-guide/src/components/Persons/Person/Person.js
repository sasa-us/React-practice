import React, {Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

// const person = (props) => {
// convert to class based
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef(); //React method
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {

        // console.log(props.changed);
        console.log('[Person.js] rendering...');

        return (
            <Aux>  
                {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
                {/* <div className={classes.Person}> */}
                    <p onClick={this.props.click}>I'm {this.props.name}, { this.props.age } year old  </p>
                    <span>{this.props.children}</span>
                    <input 
                        ref={this.inputElementRef}
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}/> 
                {/* </div>   */}
                
            {/* </Fragment>           */}
            </Aux>
        );
    }
}

Person.propTypes = {
    //props name
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,  classes.Person);