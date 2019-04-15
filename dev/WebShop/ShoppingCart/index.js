import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = ({items}) => {

    const total = items.reduce((t, p) => t + parseFloat(p.price), 0);

    const distinctItems = Object.entries(items.reduce((t, p) => {
        if(!t[p.productName]) t[p.productName] = 0;
        t[p.productName]++;
        return t;
    }, {})).map(e => ({
        productName: e[0],
        amount: e[1]
    }));

    const itemsList = distinctItems.map((item, index) => (
        <li key={`item-${index}`}>
            <div>{item.productName} ({item.amount})</div>
        </li>
    ));

    return (
        <div>
            <div>Cart:</div>

            <ul>
                {itemsList}
            </ul>

            <div>Total: {total}</div>

            <div><button>Buy</button></div>
        </div>
    )
};

ShoppingCart.propTypes = {
    items: PropTypes.array
};

export default ShoppingCart;