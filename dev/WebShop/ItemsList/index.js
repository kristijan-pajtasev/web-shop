import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import './ItemsList.less'

const ItemsList = ({items, total, page, addItemToCart}) => {

    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <Product product={item} addProductToCart={addItemToCart}/>
        </li>
    ));
    return (
        <div>
            <ul className="items-list">
                {itemsList}
            </ul>
            <div>
                <div>Page: {page}</div>
                <div>Total: {total}</div>
            </div>
        </div>
    )
};

ItemsList.propTypes = {
    items: PropTypes.array
};

export default ItemsList;