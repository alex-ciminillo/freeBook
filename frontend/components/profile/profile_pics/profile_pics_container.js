import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import ProfilePics from './profile_pics';
import { addFileToUser } from './../../../actions/user_actions'
import { showModal } from '../../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(logout()),
    addFileToUser: (formData) => dispatch(addFileToUser(formData)),
    showModal: (modal) => dispatch(showModal(modal)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePics);
