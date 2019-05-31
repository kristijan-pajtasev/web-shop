export default (state = {}, action = {}) => {
    switch(action.type) {
        case "SET_PRODUCTS":
            const { products, total, page } = action;
            return Object.assign({}, state, { products, total, page });
        default:
            return state;
    }
}