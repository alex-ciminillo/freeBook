import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import ChoosePics from './choose_pics';
import { addFileToUser } from './../../../actions/user_actions'
import { hideModal } from '../../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(logout()),
    addFileToUser: (formData) => dispatch(addFileToUser(formData)),
    hideModal: () => dispatch(hideModal()) }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePics);
