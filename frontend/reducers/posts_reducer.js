import { ADD_POST, REMOVE_POST, RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case ADD_POST:
            nextState[action.post.id] = action.post;
            return nextState;
        case RECEIVE_POST:
            nextState[action.post.id] = action.post
            return nextState;
        case RECEIVE_ALL_POSTS:
            return action.posts
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;