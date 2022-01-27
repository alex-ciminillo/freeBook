

export const addFileToUser = (formData)  => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${formData.id}`,
        data: formData.data,
        contentType: false,
        processData: false
    })
  );











