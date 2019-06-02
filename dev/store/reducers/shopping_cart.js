export default (state = null, action = {}) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return state ? [ ...state, action.product ] : [ action.product ];
        case "SET_CART":
            return action.products;
        case "EMPTY_CART":
            return null;
        case "REMOVE_ITEM":
            return state.filter(product => product.product_id !== action.product_id);
        default:
            return state;
    }
}