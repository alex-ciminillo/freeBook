


export const CHANGE_PROFILE_NAVBAR = 'CHANGE_PROFILE_NAVBAR';


export const changeNavbar = (button) => {
    return { type: CHANGE_PROFILE_NAVBAR, button }
};

export const changeProfileNavbar = (button) => (dispatch) => {
    return dispatch(changeNavbar(button))
};





















