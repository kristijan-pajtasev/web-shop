import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import './ItemsList.less'

const ItemsList = ({items, total, page, addItemToCart, getProducts, search}) => {

    const itemsList = items.map((item, index) => (
        <li key={`item-${index}`}>
            <Product product={item} addProductToCart={addItemToCart}/>
        </li>
    ));

    const nextPage = () => getProducts(page + 1, search);
    const prevPage = () => getProducts(page - 1, search);
    const firstPage = 1;
    const lastPage = Math.ceil(total / 12);

    return (
        <div>
            <ul className="items-list">
                {itemsList}
            </ul>
            <div className="items-list-paging">
                <button disabled={page === firstPage} onClick={prevPage}>Previous</button>
                <span>{page} / {lastPage}</span>
                <button disabled={page === lastPage} onClick={nextPage}>Next</button>
            </div>
        </div>
    )
};

ItemsList.propTypes = {
    items: PropTypes.array
};

export default ItemsList;