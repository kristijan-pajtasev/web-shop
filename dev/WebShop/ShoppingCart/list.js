import React from 'react';
import PropTypes from 'prop-types';

const ShoppingList = ({products}) => {

    const distinctProducts = Object.entries(products.reduce((t, p) => {
        if (!t[p.productName]) t[p.productName] = 0;
        t[p.productName]++;
        return t;
    }, {})).map(e => ({
        productName: e[0],
        amount: e[1]
    }));

    const productsList = distinctProducts.map((item, index) => (
        <li key={`item-${index}`}>
            <div>{item.productName} ({item.amount})</div>
        </li>
    ));

    return (
        <ul>
            {productsList}
        </ul>
    )
};


export default ShoppingList;