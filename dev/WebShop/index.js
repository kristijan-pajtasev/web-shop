import React from 'react';
import ItemsList from './ItemsList';
import RecomendedItems from './RecomendedItems';
import {fetchProducts} from '../actions/products';
import {addToCart} from '../actions/shopping_cart';
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

    addItemToCart(item) {
        this.setState({shoppingCart: [...this.state.shoppingCart, item]})
    }

    render() {
        const {products} = this.props;
        if (!products.products) return null;
        return (
            <div>Web shop
                <ItemsList addItemToCart={this.props.actions.addToCart}
                           items={products.products}
                           page={products.page}
                           total={products.total}
                           getProducts={this.props.actions.fetchProducts}/>
                <RecomendedItems items={products.products}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({fetchProducts, addToCart}, dispatch)
});

const mapStateToProps = state => {
    const {products, shoppingCart} = state;
    return {products, shoppingCart};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(WebShop);