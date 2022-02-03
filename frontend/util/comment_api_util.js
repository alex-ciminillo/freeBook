export const createComment = (formData) => (
    $.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const deleteComment = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${id}`
    })
)

export const updateComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
}

export const fetchComments = () => (
    $.ajax({
        method: 'GET',
        url: '/api/comments'
    })
);

export const fetchComment = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/comments/${id}`
    })
)