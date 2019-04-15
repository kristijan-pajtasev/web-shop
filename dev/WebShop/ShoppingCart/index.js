import React from 'react';
import PropTypes from 'prop-types';
import ShoppingList from './list';

const ShoppingCart = ({items}) => {

    const total = items.reduce((t, p) => t + parseFloat(p.price), 0);

    return (
        <div>
            <div>Cart:</div>

            <ShoppingList products={items} />

            <div>Total: {total}</div>

            <div><button>Buy</button></div>
        </div>
    )
};

ShoppingCart.propTypes = {
    items: PropTypes.array
};

export default ShoppingCart;