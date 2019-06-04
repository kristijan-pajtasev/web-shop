import React from 'react';

const Product = ({product, addProductToCart}) => {
    const {
        product_id,
        product_category_name
    } = product;
    const addToCart = item => addProductToCart(item);
    return (
        <div className="product-list-item">
            <div className='product-details'>
                <div className='product-icon'>
                    <i className="material-icons">
                        {"local_bar"}
                    </i>
                </div>
                <div className='product-data'>
                    <div><a href={`/#/product/${product_id}`}>{product_id}</a></div>
                    <div>Category: {product_category_name}</div>
                </div>
            </div>
            <button onClick={addToCart.bind(this, product)}>Add to cart</button>
        </div>
    )
};

export default Product;