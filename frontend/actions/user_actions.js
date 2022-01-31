
import * as APIUtil from './../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_OTHER_USER = 'RECEIVE_OTHER_USER';
export const RECEIVE_OTHER_USER_ERRORS = 'RECEIVE_OTHER_USER_ERRORS';


export const receiveErrors = (errors) => {
    return { type: RECEIVE_OTHER_USER_ERRORS, errors }
};

export const receiveCurrentUser = (currentUser) => {
    return { type: RECEIVE_CURRENT_USER, currentUser }
};

export const receiveOtherUser = (otherUser) => {
    return { type: RECEIVE_OTHER_USER, otherUser }
};

export const addFileToUser = (formData) => (dispatch) => (
    APIUtil.addFileToUser(formData)
        .then((user) => dispatch(receiveCurrentUser(user)))
)

export const fetchOtherUser = (id) => (dispatch) => {
    console.log(id)
    return APIUtil.fetchOtherUser(id).then((otherUser) => {
        return dispatch(receiveOtherUser(otherUser))
    }, err => {
      return dispatch(receiveErrors(err.responseJSON))
    })
};











