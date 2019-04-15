import React from 'react';
import PropTypes from 'prop-types';
import RecommendedProduct from '../RecommendedProduct'

const RecomendedItems = ({items}) => {
    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <RecommendedProduct product={item} />
        </li>
    ));
    return (
        <div>
            <div>Recommendations</div>
            <ul>
                {itemsList}
            </ul>
        </div>
    )
};

RecomendedItems.propTypes = {
    items: PropTypes.array
};

export default RecomendedItems;