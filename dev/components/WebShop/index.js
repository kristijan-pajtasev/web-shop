import React from 'react';
import ItemsList from './ItemsList';
import RecommendedItems from '../Recommendations/RecomendedItems';
import {fetchProducts} from '../../actions/products';
import {addToCart} from '../../actions/shopping_cart';
import {fetchRecommendations} from '../../actions/recommendations';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class WebShop extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            shoppingCart: []
        };
        props.actions.fetchProducts();
        props.actions.fetchRecommendations("BASKET");
    }

    addItemToCart(item) {
        this.setState({shoppingCart: [...this.state.shoppingCart, item]})
    }

    render() {
        const {products, filters, recommendations} = this.props;
        if (!products.products || !recommendations.basket) return null;
        return (
            <div>Web shop
                <ItemsList addItemToCart={this.props.actions.addToCart}
                           items={products.products}
                           page={products.page}
                           search={filters.search}
                           total={products.total}
                           getProducts={this.props.actions.fetchProducts}/>
                <RecommendedItems title="You might be also interested" items={recommendations.basket}
                                  addItemToCart={this.props.actions.addToCart}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({fetchProducts, addToCart, fetchRecommendations}, dispatch)
});

const mapStateToProps = state => {
    const {products, shoppingCart, filters, recommendations} = state;
    return {products, shoppingCart, filters, recommendations};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(WebShop);