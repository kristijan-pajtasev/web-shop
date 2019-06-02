import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCart, buy } from '../../actions/shopping_cart';

class ShoppingCart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        props.actions.getCart();
    }

    render() {
        const { shoppingCart, actions } = this.props;

        if(!shoppingCart) return null;

        return (
            <div>
                <ul>
                    {shoppingCart.map((product, i) => <li key={`cart-item-${i}`}>{product.product_id}</li>)}
                </ul>
                <button onClick={actions.buy}>Buy</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getCart, buy }, dispatch)
});

const mapStateToProps = state => {
    const { shoppingCart } = state;
    return { shoppingCart };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);