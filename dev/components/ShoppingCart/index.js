import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getCart, buy, removeFromCart, addToCart} from '../../actions/shopping_cart';
import RecommendedItems from '../Recommendations/RecomendedItems';
import {fetchRecommendations} from "../../actions/recommendations";

class ShoppingCart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        props.actions.getCart();
        props.actions.fetchRecommendations("BASKET");
    }

    render() {
        const { shoppingCart, actions, recommendations } = this.props;

        if(!shoppingCart || !recommendations.basket) return null;

        return (
            <div>
                <ul>
                    {shoppingCart.map((product, i) => (
                        <li key={`cart-item-${i}`}>
                            {product.product_id} ({product.amount}) <button onClick={actions.removeFromCart.bind(null, product.product_id)}>Remove from cart</button>
                        </li>
                    ))}
                </ul>
                <button onClick={actions.buy}>Buy</button>
                <RecommendedItems title="You might be also interested" items={recommendations.basket}
                                  addItemToCart={this.props.actions.addToCart}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getCart, buy, removeFromCart, fetchRecommendations, addToCart }, dispatch)
});

const mapStateToProps = state => {
    const { shoppingCart, recommendations } = state;
    return { shoppingCart, recommendations };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);