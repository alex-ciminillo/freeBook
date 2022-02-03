import * as APIUtil from '../util/friend_api_util';

export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});


export const addFriend = friend => ({
    type: ADD_FRIEND,
    friend
});

export const removeFriend = (friendId) => ({
    type: REMOVE_FRIEND,
    friendId
});

export const receiveAllFriends = (friends) => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
});

export const createFriend = (friend) => dispatch => {
    console.log(friend)
    return APIUtil.createFriend(friend)
        .then((friend) => dispatch(receiveAllUsers(friend)))
}
    


export const deleteFriend = (friendId) => dispatch => (
    APIUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId)))
)

export const updateFriend = (friend) => dispatch => (
    APIUtil.updateFriend(friend)
        .then((friend) => dispatch(addFriend(friend)))
)

export const fetchFriends = () => dispatch => (
    APIUtil.fetchFriends()
        .then((friends) => dispatch(receiveAllFriends(friends)))
)