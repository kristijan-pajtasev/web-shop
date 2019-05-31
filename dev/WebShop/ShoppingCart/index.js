import React from 'react';
import PropTypes from 'prop-types';
import ShoppingList from './list';

class ShoppingCart extends React.PureComponent {
    constructor() {
        super();
        this.state = {isOpen: false}
    }

    toggleDropdown() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const {items} = this.props;
        const {isOpen} = this.state;
        const totalItems = items.length;

        return (
            <div>
                <div onClick={this.toggleDropdown.bind(this)}>Cart ({totalItems}):</div>

                {isOpen ? <ShoppingList products={items}/> : null}

                <div>
                    <button>Buy</button>
                </div>
            </div>
        )
    }
}

ShoppingCart.propTypes = {
    items: PropTypes.array
};

export default ShoppingCart;