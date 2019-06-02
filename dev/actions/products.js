import config from '../config';

export const fetchProducts = (page = 1, query="") => {
    return dispatch => {
        fetch(`${config.api}/product?page=${page}&search=${query}`)
            .then(res => res.json()
                .then(products => {
                    dispatch({ type: "SET_PRODUCTS", ...products })
                })
            )
    }
};

export const fetchProduct = (productId) => {
    return dispatch => {
        fetch(`${config.api}/product/${productId}`)
            .then(res => res.json()
                .then(product => {
                    dispatch({ type: "SET_PRODUCT", product })
                })
            )
    }
};

export const setSearchQuery = (search) => {
    return dispatch => {
        dispatch({ type: "SET_QUERY", search });
        fetchProducts(1, search)(dispatch);
    }
};