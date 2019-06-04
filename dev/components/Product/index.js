import React from 'react';
import { connect } from 'react-redux';
import RecommendedItems from '../Recommendations/RecomendedItems';
import { fetchProduct } from '../../actions/products';
import { addToCart } from '../../actions/shopping_cart';
import { bindActionCreators } from 'redux';
import Details from './Details';
import {fetchRecommendations} from '../../actions/recommendations';

class Product extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {};
        props.actions.fetchProduct(props.productId);
        props.actions.fetchRecommendations("SIMILAR", props.productId);
    }

    render() {
        const { product, actions, recommendations } = this.props;

        if(!product || !recommendations.similar) return null;

        return (
            <div>
                <Details product={product} addToCart={actions.addToCart}/>
                <RecommendedItems title="Similar items" items={recommendations.similar}
                                  addItemToCart={this.props.actions.addToCart}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchProduct, addToCart, fetchRecommendations }, dispatch)
});

const mapStateToProps = state => {
    const { product, recommendations } = state;
    return { product, recommendations };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Product);