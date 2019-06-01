export default (state = null, action = {}) => {
    switch(action.type) {
        case "SET_PRODUCT":
            const { product } = action;
            return product;
        default:
            return state;
    }
}