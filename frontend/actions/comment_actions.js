import * as APIUtil from '../util/comment_api_util';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const addComment = comment => ({
    type: ADD_COMMENT,
    comment
});

export const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

export const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
});

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

export const createComment = (formData) => dispatch => (
    APIUtil.createComment(formData)
        .then((comment) => dispatch(addComment(comment)))
)

export const deleteComment = (commentId) => dispatch => (
    APIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
)

export const updateComment = (comment) => dispatch => (
    APIUtil.updateComment(comment)
        .then((comment) => dispatch(receiveComment(comment)))
)

export const fetchComments = () => dispatch => (
    APIUtil.fetchComments()
        .then((comments) => dispatch(receiveAllComments(comments)))
)

export const fetchComment = (commentId) => dispatch => (
    APIUtil.fetchComment(commentId)
        .then((commentId) => dispatch(receiveComment(commentId)))
)