import React from 'react';

// const WithClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );


const withClass = (WrappedComponent, className) => {
    //the props getted and pass to wrap component
    return props => (
        <div className={className}>
            {/* props added as single property */}
            {/* <WrappedComponent props={props}/> */}
            <WrappedComponent {...props}/> 
            {/* this one will pull out all props obj and distribute them as new key value pair
            on this wrap component */}
        </div>
    );
}

export default withClass;