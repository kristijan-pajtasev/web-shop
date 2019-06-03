import React from 'react';

const Product = ({ product, addItemToCart }) => {
    const {
        product_id,
        product_category_name,
        product_name_length,
        product_description_lenght,
        product_photos_qty,
        product_weight_g,
        product_length_cm,
        product_height_cm,
        product_width_cm
    } = product;

    const addToCart = () => addItemToCart(product);


    return (
        <div>
            <div>Product: {product_id}</div>
            <div>Category Name: {product_category_name}</div>
            <div>Name length: {product_name_length}</div>
            <div>Description length: {product_description_lenght}</div>
            <div>Photos (qty): {product_photos_qty}</div>
            <div>Weight (g): {product_weight_g}</div>
            <div>Length (cm): {product_length_cm}</div>
            <div>Height (cm): {product_height_cm}</div>
            <div>Width (cm): {product_width_cm}</div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
};

export default Product;