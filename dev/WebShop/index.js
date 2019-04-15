import React from 'react';
import ItemsList from './ItemsList';
import ShoppingCart from './ShoppingCart';
import RecomendedItems from './RecomendedItems';
import items from './mocks/items';

class WebShop extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            shoppingCart: []
        };
    }
    addItemToCart(item){
        this.setState({shoppingCart: [...this.state.shoppingCart, item]})
    }
    
    render() {
        return (
            <div>Web shop
                <ShoppingCart items={this.state.shoppingCart}/>
                <ItemsList addItemToCart={this.addItemToCart.bind(this)} items={items}/>
                <RecomendedItems items={items}/>
            </div>
        )
    }
};

export default WebShop;