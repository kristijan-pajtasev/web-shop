export default (state = {}, action = {}) => {
    switch(action.type) {
        case "SET_RECOMMENDATIONS":
            const { products, total, page } = action;
            return Object.assign({}, state, action.recommende);
        default:
            return state;
    }
}