import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { modal: action.modal, file: action.file };
        case HIDE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalReducer;