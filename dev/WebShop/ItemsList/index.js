import React from 'react';

const ItemsList = ({items}) => {
    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <div>{item.productName}</div>
        </li>
    ))
    return <ul>
        {itemsList}
    </ul>
}

export default ItemsList;