import React from 'react';
import ItemsList from './ItemsList';
import ShoppingCart from './ShoppingCart';
import RecomendedItems from './RecomendedItems';
import { fetchProducts } from '../actions/products';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class WebShop extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            shoppingCart: []
        };
        props.actions.fetchProducts();
    }
    addItemToCart(item){
        this.setState({shoppingCart: [...this.state.shoppingCart, item]})
    }
    
    render() {
        const { products } = this.props;
        console.log(products)
        if(!products.products) return null;
        return (
            <div>Web shop
                <ShoppingCart items={this.state.shoppingCart}/>
                <ItemsList addItemToCart={this.addItemToCart.bind(this)} items={products.products}/>
                <RecomendedItems items={products.products}/>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchProducts }, dispatch)
});

const mapStateToProps = state => {
    const { products } = state;
    return { products};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(WebShop);