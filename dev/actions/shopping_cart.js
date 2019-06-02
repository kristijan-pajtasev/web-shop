export const addToCart = (product_id) => {
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
        fetch("http://127.0.0.1:9000/shopping-cart", options)
            .then(res => {
                dispatch({type: "ADD_TO_CART", product: product_id})
            })
    }
};

export const getCart = () => {
    return dispatch => {
        fetch("http://127.0.0.1:9000/shopping-cart")
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
        }};
    return dispatch => {
        fetch("http://127.0.0.1:9000/shopping-cart/purchase", options)
            .then(res => res.json().then(products => {
                    dispatch({type: "EMPTY_CART", products})
                }
            ))
    }
};