import React from 'react';
import ItemsList from './ItemsList';
import ShoppingCart from './ShoppingCart';
import RecomendedItems from './RecomendedItems';
import items from './mocks/items';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
        const { products } = this.props;
        console.log(products)
        return (
            <div>Web shop
                <ShoppingCart items={this.state.shoppingCart}/>
                <ItemsList addItemToCart={this.addItemToCart.bind(this)} items={products.products}/>
                <RecomendedItems items={items}/>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({  }, dispatch)
});

const mapStateToProps = state => {
    const { products } = state;
    return { products};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(WebShop);