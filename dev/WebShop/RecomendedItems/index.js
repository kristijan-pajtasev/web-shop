import React from 'react';
import PropTypes from 'prop-types';

const RecomendedItems = ({items}) => {
    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <div>{item.productName}</div>
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