import React from 'react';
import PropTypes from 'prop-types';

const ItemsList = ({items, addItemToCart}) => {
    const addToCart = item => addItemToCart(item);

    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <div>{item.productName}</div>
            <button onClick={addToCart.bind(this, item)}>Add to cart</button>
        </li>
    ));
    return <ul>
        {itemsList}
    </ul>
};

ItemsList.propTypes = {
    items: PropTypes.array
};

export default ItemsList;