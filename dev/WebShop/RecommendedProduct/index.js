import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <div>{product.productName}</div>
            <div>Price: {product.price}</div>
            <div>Is Allergic: {product.isAllergic}</div>
        </div>
    )
};

export default Product;