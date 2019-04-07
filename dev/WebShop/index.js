import React from 'react';
import ItemsList from './ItemsList';
import items from './mocks/items';

const WebShop = () => {
    return (
        <div>Web shop
            <ItemsList items={items} />
        </div>
    )
};

export default WebShop;