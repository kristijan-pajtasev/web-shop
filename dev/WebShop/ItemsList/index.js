import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';

const ItemsList = ({items, addItemToCart}) => {

    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <Product product={item} addProductToCart={addItemToCart}/>
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