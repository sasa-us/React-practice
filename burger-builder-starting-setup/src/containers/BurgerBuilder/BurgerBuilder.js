import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {...};
    // }

  //mordern way
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }


    render() {
        return (
            <Aux>
                <Burger  ingredients={this.state.ingredients} />
                <div>burger here</div>
                <BuildControls />
                <div>Build controls here</div>
            </Aux>
        );
    }

}//end class

export default BurgerBuilder;