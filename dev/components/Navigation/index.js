import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCart } from '../../actions/shopping_cart'

class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        props.actions.getCart();
    }

    render() {
        const { shoppingCart } = this.props;
        const shoppingCartSize = shoppingCart ? shoppingCart.length : "";

        return (
            <div>
                <a href='/'>Home</a>
                <a href='/shopping-cart'>Cart ({shoppingCartSize})</a>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getCart }, dispatch)
});

const mapStateToProps = state => {
    const { shoppingCart } = state;
    return { shoppingCart };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Navigation);