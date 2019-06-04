import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCart } from '../../actions/shopping_cart'
import { setSearchQuery } from '../../actions/products'
import './Navigation.less';

class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            search: props.filters.search || ""
        };
        props.actions.getCart();
    }

    setSearchValue(ev) {
        const search = ev.target.value;
        this.setState({ search });
    }

    setSearchQuery() {
        this.props.actions.setSearchQuery(this.state.search);
    }

    render() {
        const { shoppingCart } = this.props;
        const { search } = this.state;
        const shoppingCartSize = shoppingCart ? shoppingCart.reduce((a, b) => a + b.amount, 0) : "";

        return (
            <div className='navigation-component'>
                <a href='/#'>
                    <i className="material-icons">
                        home
                    </i>
                </a>
                <div className='navigation-search'>
                    <input type="text" value={search} onChange={this.setSearchValue.bind(this)} />
                    <button onClick={this.setSearchQuery.bind(this)}>Search</button>
                </div>
                <a href='/#/shopping-cart'>
                    <i className="material-icons">
                        shopping_cart
                    </i>
                    <span className="shopping-cart-size">({shoppingCartSize})</span>
                </a>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getCart, setSearchQuery }, dispatch)
});

const mapStateToProps = state => {
    const { shoppingCart, filters } = state;
    return { shoppingCart, filters };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Navigation);