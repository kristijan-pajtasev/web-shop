import config from '../config';

const getAlgorithm = (type, id) => {
    switch(type) {
        case "BASKET":
            return "basket";
        case "SIMILAR":
            return `similar/${id}`;
    }
};

const broadcastRecommended = (type, recommended, dispatch) => {
    switch(type) {
        case "BASKET":
            dispatch({ type: "SET_RECOMMENDATIONS", recommended: { basket: recommended } });
            break;
        case "SIMILAR":
            dispatch({ type: "SET_RECOMMENDATIONS", recommended: { similar: recommended } });
            break;
    }
};

export const fetchRecommendations = (type, id) => {
    return dispatch => {
        const algorithm = getAlgorithm(type, id);
        fetch(`${config.api}/recommendations/${algorithm}`).then(
            res => res.json().then(
                recommended => {
                    broadcastRecommended(type, recommended, dispatch);
                    dispatch({ type: "SET_RECOMMENDATIONS", recommended: { basket: recommended } })
                }
            )
        )
    }
};