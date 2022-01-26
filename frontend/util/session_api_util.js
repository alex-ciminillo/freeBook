import humps from 'humps'

export const login = (user) => (

    $.ajax({
      method: 'POST',
      url: '/api/session',
      data:  humps.decamelizeKeys( { user } ) 
    })
  );
  
  export const signup = (user) => (
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: humps.decamelizeKeys( { user } ) 
    })
  );
  
  export const logout = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/session'
    })
  );