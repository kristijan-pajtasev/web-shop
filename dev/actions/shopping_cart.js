import config from '../config';

export const addToCart = (product) => {
    const { product_id } = product;
    return dispatch => {
        const data = {
            customer_id: 1,
            product_id
        };
        const options = {
            method: "post", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(data)
        };
        fetch(`${config.api}/shopping-cart`, options)
            .then(res => {
                getCart()(dispatch);
            })
    }
};

export const getCart = () => {
    return dispatch => {
        fetch(`${config.api}/shopping-cart`)
            .then(res => res.json().then(products => {
                    dispatch({type: "SET_CART", products})
                }
            ))
    }
};

export const buy = () => {
    const options = {
        method: "post", headers: {
            "Content-Type": "application/json",
        }
    };
    return dispatch => {
        fetch(`${config.api}/shopping-cart/purchase`, options)
            .then(res =>
                dispatch({type: "EMPTY_CART"})
            )
    }
};

export const removeFromCart = (product_id) => {
    const data = {
        product_id,
        customer_id: 1
    };
    const options = {
        method: "delete", headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(data)
    };
    return dispatch => {
        fetch(`${config.api}/shopping-cart`, options)
            .then(res =>
                dispatch({type: "REMOVE_ITEM", product_id})
            )
    }
};