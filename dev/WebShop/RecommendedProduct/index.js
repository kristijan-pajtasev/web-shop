import React from 'react';

const Product = ({ product }) => {
    const addToCart = item => addProductToCart(item);
    return (
        <div>
            <div>{product.productName}</div>
            <div>Price: {product.price}</div>
            <div>Is Allergic: {product.isAllergic}</div>
        </div>
    )
};

export default Product;