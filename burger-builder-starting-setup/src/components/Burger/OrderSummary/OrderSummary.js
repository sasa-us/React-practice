import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    //need title and list order and price
    //checkout

    const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
                    </li>);
            });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicous burger with following </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    )
}

export default orderSummary;