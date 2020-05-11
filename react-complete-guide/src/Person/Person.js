import React from 'react';
import styled from 'styled-components';
// import './Person.css';


//this will return a react component 
const StyledDiv = styled.div`
    width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow:  0 2px 3px #ccc;
            padding: 16px;
            text-align: center;

    @media (min-width: 500px): {
        width: '450px'
    }
`;
const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    console.log(props.changed);
   
    return (
        // <div className="Person">
       <StyledDiv>
            <p onClick={props.click}>I'm {props.name}, { props.age } year old  </p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name}/> 
        
       </StyledDiv>
            
    
    );
}

export default person;