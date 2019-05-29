export const fetchProducts = () => {
    return dispatch => {
        fetch('http://127.0.0.1:9000/product')
            .then(res => res.json()
                .then(products => {
                    console.log(products)
                    dispatch({ type: "SET_PRODUCTS", products })
                })
            )
    }
};