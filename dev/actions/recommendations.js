import config from '../config';

const getAlgorithm = type => {
    switch(type) {
        case "BASKET":
            return "basket"
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

export const fetchRecommendations = type => {
    return dispatch => {
        const algorithm = getAlgorithm(type);
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