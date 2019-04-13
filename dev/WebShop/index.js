import React from 'react';
import ItemsList from './ItemsList';
import ShoppingCart from './ShoppingCart';
import RecomendedItems from './RecomendedItems';
import items from './mocks/items';

const WebShop = () => {
    return (
        <div>Web shop
            <ShoppingCart items={items}/>
            <ItemsList items={items}/>
            <RecomendedItems items={items}/>
        </div>
    )
};

export default WebShop;