export default (state = {}, action = {}) => {
    switch(action.type) {
        case "SET_QUERY":
            const { search } = action;
            return Object.assign({}, state, { search });
        default:
            return state;
    }
}