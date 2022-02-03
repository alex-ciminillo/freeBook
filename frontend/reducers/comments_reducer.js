import { ADD_COMMENT, REMOVE_COMMENT, RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case ADD_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case RECEIVE_ALL_COMMENTS:
            return action.comments
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;