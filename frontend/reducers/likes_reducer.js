import { RECEIVE_LIKES, REMOVE_LIKE, RECEIVE_LIKE } from "../actions/like_actions";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_LIKES:
            return action.likes
        case RECEIVE_LIKE:
            console.log("hello")
            nextState[action.like.id] = action.like
            return nextState
        case REMOVE_LIKE:
            delete nextState[action.likeId]
            return nextState
        default:
            return state
    }
};

export default likesReducer;