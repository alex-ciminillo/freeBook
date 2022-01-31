
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = ({modal, file}) => {
    console.log(modal)
    return {
        type: SHOW_MODAL,
        modal,
        file  
    }
    
}

export const hideModal = () => {
    return { type: HIDE_MODAL }
}














