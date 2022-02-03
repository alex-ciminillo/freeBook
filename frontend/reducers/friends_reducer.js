import { ADD_FRIEND, REMOVE_FRIEND, RECEIVE_ALL_FRIENDS } from '../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case ADD_FRIEND:
            nextState[action.friend.id] = action.friend;
            return nextState;
        case RECEIVE_ALL_FRIENDS:
            return action.friends
        case REMOVE_FRIEND:
            delete nextState[action.friendId];
            return nextState;
        default:
            return state;
    }
}

export default friendsReducer;