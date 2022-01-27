
import * as UsersUtil from './../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (currentUser) => {
    return { type: RECEIVE_CURRENT_USER, currentUser }
};

export const addFileToUser = (formData) => (dispatch) => (
    UsersUtil.addFileToUser(formData)
        .then((user) => dispatch(receiveCurrentUser(user)))
)











