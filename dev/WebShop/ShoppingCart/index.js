import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = ({items}) => {
    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <div>{item.productName}</div>
        </li>
    ));
    return <ul>
        {itemsList}
    </ul>
};

ShoppingCart.propTypes = {
    items: PropTypes.array
};

export default ShoppingCart;