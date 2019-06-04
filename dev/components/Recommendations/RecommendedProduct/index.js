import React from 'react';

const Product = ({ product, addItemToCart }) => {
    const {
        product_id,
        product_category_name
    } = product;

    const addToCart = () => addItemToCart(product);

    return (
        <div className="recommended-item">
            <div className='recommended-item-details'>
                <div className='recommended-item-icon'>
                    <i className="material-icons">
                        {"local_bar"}
                    </i>
                </div>
                <div className='recommended-item-data'>
                    <div><a href={`/product/${product_id}`}>{product_id}</a></div>
                    <div>Category: {product_category_name}</div>
                </div>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
};

export default Product;