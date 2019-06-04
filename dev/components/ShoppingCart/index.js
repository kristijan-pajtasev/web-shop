import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCart, buy, removeFromCart, addToCart} from '../../actions/shopping_cart';
import RecommendedItems from '../Recommendations/RecomendedItems';
import {fetchRecommendations} from "../../actions/recommendations";
import "./ShoppingCart.less";

class ShoppingCart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        props.actions.getCart();
        props.actions.fetchRecommendations("BASKET");
    }

    render() {
        const {shoppingCart, actions, recommendations} = this.props;

        if (!shoppingCart || !recommendations.basket) return null;

        return (
            <div className="shopping-cart">
                <div className="products-container">
                    <div className="products-list-container">
                        <ul>
                            {shoppingCart.map((product, i) => (
                                <li className="shopping-cart-item" key={`cart-item-${i}`}>
                                    <div className='product-details'>
                                        <div className="product-icon">
                                            <i className="material-icons">
                                                {"local_bar"}
                                            </i>
                                        </div>
                                        <div className='product-data'>
                                            <div>
                                                <a href={`/#/product/${product.product_id}`}>
                                                    {product.product_id} ({product.amount})
                                                </a>
                                            </div>
                                            <div>Category: {product.product_category_name}</div>
                                        </div>
                                    </div>
                                    <div className="shopping-item-controls">
                                        <button onClick={actions.removeFromCart.bind(null, product.product_id)}>
                                            Remove from cart
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="shopping-cart-control">
                            <button onClick={actions.buy}>Buy</button>
                        </div>
                    </div>
                    <div className="recommended-products-list-container">
                        <RecommendedItems title="You might be also interested" items={recommendations.basket}
                                          addItemToCart={this.props.actions.addToCart}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({getCart, buy, removeFromCart, fetchRecommendations, addToCart}, dispatch)
});

const mapStateToProps = state => {
    const {shoppingCart, recommendations} = state;
    return {shoppingCart, recommendations};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);