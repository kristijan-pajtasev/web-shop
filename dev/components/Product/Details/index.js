import React from 'react';
import './Details.less';

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
        <div className="product-details-component">
            <div className="product-details-wrapper">
                <div className="product-icon">
                    <i className="material-icons">
                        {"local_bar"}
                    </i>
                </div>
                <div className="product-details">
                    <div><a href={`/#/product/${product_id}`}>{product_id}</a></div>
                    <div>
                        <span className="product-details-label">Category Name:</span> {product_category_name}
                    </div>
                    <div>
                        <span className="product-details-label">Name length:</span> {product_name_length}
                    </div>
                    <div>
                        <span className="product-details-label">Description length:</span> {product_description_lenght}
                    </div>
                    <div>
                        <span className="product-details-label">Photos (qty):</span> {product_photos_qty}
                    </div>
                    <div>
                        <span className="product-details-label">Weight (g):</span> {product_weight_g}
                    </div>
                    <div>
                        <span className="product-details-label">Length (cm):</span> {product_length_cm}
                    </div>
                    <div>
                        <span className="product-details-label">Height (cm):</span> {product_height_cm}
                    </div>
                    <div>
                        <span className="product-details-label">Width (cm):</span> {product_width_cm}
                    </div>
                </div>
            </div>
            <div className="product-controls">
                <button onClick={addToCart.bind(this, product)}>Add to cart</button>
            </div>
        </div>
    )
};

export default Product;