import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/products';
import { addToCart } from '../../actions/shopping_cart';
import { bindActionCreators } from 'redux';
import Details from './Details';

class Product extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {};
        props.actions.fetchProduct(props.productId);
    }

    render() {
        const { product, actions } = this.props;

        if(!product) return null;

        return (
            <div>
                <Details product={product} addToCart={actions.addToCart}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchProduct, addToCart }, dispatch)
});

const mapStateToProps = state => {
    const { product } = state;
    return { product };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Product);