export default (state = {}, action = {}) => {
    switch(action.type) {
        case "SET_PRODUCTS":
            return Object.assign({}, state, {products: action.products});
        default:
            return state;
    }
}