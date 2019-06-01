import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ShoppingCart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { shoppingCart, actions } = this.props;

        return (
            <div>
                <ul>
                    {shoppingCart.map(product => <li>{product.product_id}</li>)}
                </ul>
                Shopping cart: {shoppingCart.length}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({  }, dispatch)
});

const mapStateToProps = state => {
    const { shoppingCart } = state;
    return { shoppingCart };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);