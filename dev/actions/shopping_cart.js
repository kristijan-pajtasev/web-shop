export const addToCart = (product) => {
    return dispatch => {
        dispatch({type: "ADD_TO_CART", product})
    }
};