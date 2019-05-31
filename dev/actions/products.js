export const fetchProducts = (page = 1) => {
    return dispatch => {
        fetch(`http://127.0.0.1:9000/product?page=${page}`)
            .then(res => res.json()
                .then(products => {
                    dispatch({ type: "SET_PRODUCTS", ...products })
                })
            )
    }
};