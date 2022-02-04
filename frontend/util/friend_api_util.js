export const createFriend = (friend) => {
    return $.ajax({
        method: 'POST',
        url: `/api/friends`,
        data: friend,
    })
}

export const deleteFriend = (friendId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/friends/${friendId}`
    })
)

export const updateFriend = (friend) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/friends/${friend.friend.id}`,
        data: friend
    })
}

export const fetchFriends = () => (
    $.ajax({
        method: 'GET',
        url: '/api/friends'
    })
);