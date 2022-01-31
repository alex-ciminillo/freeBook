import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import profileReducer from './profile_reducer';

 const uiReducer = combineReducers({
    modal: modalReducer,
    profile: profileReducer
});

export default uiReducer;