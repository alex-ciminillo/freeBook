import * as APIUtil from '../util/likes_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
});

export const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes
});

export const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});



export const addLike = (like) => dispatch => {
    return (
        APIUtil.createLike(like)
            .then( like => dispatch(receiveLike(like)))
    )
};

export const deleteLike = (likeId) => dispatch => {
    return (
        APIUtil.deleteLike(likeId)
            .then( () => dispatch(removeLike(likeId)))
    )
};

export const getLikes = () => dispatch => {
    return (
        APIUtil.getAllLikes()
            .then( likes => dispatch(receiveLikes(likes)))
    )
};