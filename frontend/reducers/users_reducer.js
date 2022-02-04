import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_OTHER_USER, RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_OTHER_USER:
      return Object.assign({}, state, { [action.otherUser.id]: action.otherUser });
    case RECEIVE_ALL_USERS:
      return action.users
    default:
      return state;
  }
};

export default usersReducer;