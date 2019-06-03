import React from 'react';
import PropTypes from 'prop-types';
import RecommendedProduct from '../RecommendedProduct'
import './RecommendedItems.less';

const RecomendedItems = ({ items, title, addItemToCart }) => {
    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <RecommendedProduct product={item} addItemToCart={addItemToCart} />
        </li>
    ));
    return (
        <div>
            <div>{title}</div>
            <ul className="recommended-items-list">
                {itemsList}
            </ul>
        </div>
    )
};

RecomendedItems.propTypes = {
    items: PropTypes.array
};

export default RecomendedItems;