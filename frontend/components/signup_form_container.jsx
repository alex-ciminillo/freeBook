import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';
import { hideModal } from '../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'signup',
        modal: state.ui.modal
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    processForm: (user) => dispatch(signup(user)),
    hideModal: () => dispatch(hideModal()) 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
