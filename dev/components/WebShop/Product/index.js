import React from 'react';

const Product = ({product, addProductToCart}) => {
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
                    <div><a href={`/product/${product_id}`}>{product_id}</a></div>
                    <div>Category: {product_category_name}</div>
                </div>
            </div>
            <button onClick={addToCart.bind(this, product)}>Add to cart</button>
        </div>
    )
};

export default Product;