import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { shoppingCart } = this.props;
        const shoppingCartSize = shoppingCart.length;

        return (
            <div>
                <a href='/'>Home</a>
                <a href='/shopping-cart'>Cart ({shoppingCartSize})</a>
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Navigation);