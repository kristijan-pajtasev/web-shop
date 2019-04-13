import React from 'react';
import PropTypes from 'prop-types';

const ItemsList = ({items}) => {
    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <div>{item.productName}</div>
            <button>Add to cart</button>
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