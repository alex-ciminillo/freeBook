import { CHANGE_PROFILE_NAVBAR } from '../actions/profile_actions';

const profileReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_PROFILE_NAVBAR:
            return Object.assign({}, state, { button: action.button });;
        default:
            return state;
    }
}

export default profileReducer;