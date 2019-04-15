import React from 'react';

const Product = ({ product, addProductToCart }) => {
    const addToCart = item => addProductToCart(item);
    return (
        <div>
            <div>{product.productName}</div>
            <div>Price: {product.price}</div>
            <div>Is Allergic: {product.isAllergic}</div>
            <button onClick={addToCart.bind(this, product)}>Add to cart</button>
        </div>
    )
};

export default Product;