export const fetchProducts = (page = 1, query="") => {
    return dispatch => {
        fetch(`http://127.0.0.1:9000/product?page=${page}&search=${query}`)
            .then(res => res.json()
                .then(products => {
                    dispatch({ type: "SET_PRODUCTS", ...products })
                })
            )
    }
};

export const fetchProduct = (productId) => {
    return dispatch => {
        fetch(`http://127.0.0.1:9000/product/${productId}`)
            .then(res => res.json()
                .then(product => {
                    dispatch({ type: "SET_PRODUCT", product })
                })
            )
    }
};

export const setSearchQuery = (search) => {
    return dispatch => {
        dispatch({ type: "SET_QUERY", search })
        fetchProducts(1, search)(dispatch);
    }
};