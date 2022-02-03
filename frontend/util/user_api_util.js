
export const addFileToUser = (formData)  => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${formData.id}`,
        data: formData.data,
        contentType: false,
        processData: false
    })
};


export const fetchOtherUser = (id)  => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
};


export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
);





