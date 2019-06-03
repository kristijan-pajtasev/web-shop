export default (state = {}, action = {}) => {
    switch(action.type) {
        case "SET_RECOMMENDATIONS":
            const { recommended } = action;
            return Object.assign({}, state, recommended);
        default:
            return state;
    }
}