import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';
import { showModal } from '../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'login',
        modal: state.ui.modal
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    showModal: (modal) => dispatch(showModal(modal)),
    processForm: (user) => dispatch(login(user)) 
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
