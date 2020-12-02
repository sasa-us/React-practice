import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

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
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }
//check if need to update purchasable to true
    updatePurchaseState (ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };

        //sum all value of state , so turn this obj to arr
        const sum = Object.keys(ingredients) //create arr of str for ingredients
                    .map(igKey => {
                        return ingredients[igKey];
                    })
                    .reduce((sum, el) => {
                        return sum+el;
                    }, 0); //turn sum to single num
        this.setState({ purchasable: sum>0 });
        //pass this to return in <buildControls
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        
        //access the type
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition; 
        this.setState({totalPrice: newPrice,
                       ingredients: updateIngredients});
        console.log('add', this.state);
        this.updatePurchaseState(updateIngredients);
    }//end addIngredientHandler

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
//when ingred num is 0 , use return; will let nothing happen
//disable button is use friend 
        if(oldCount <= 0) {
            return;
        }

        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });

        this.updatePurchaseState(updateIngredients);

    }//removeIngredientHandler

    //trigger purchase button
    //and pass to build control (order button)
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        };
        //disable info key is salad/meat/bacon
        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0; //compare then return true/false
        //after return to disableInfo[key] true/false, it will update copy object above
        }
        //{salad: true, meat: false, ....}
        return (
            <Aux>
            <Modal show={this.state.purchasing}>
                <OrderSummary ingredients={this.state.ingredients}/>
            </Modal>
                <Burger  ingredients={this.state.ingredients} />
                <div>burger here</div>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                    />
                <div>Build controls here</div>
            </Aux>
        );
    }

}//end class

export default BurgerBuilder;