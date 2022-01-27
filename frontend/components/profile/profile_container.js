import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { addFileToUser } from './../../actions/user_actions'


const mapStateToProps = (state) => {
  // if (typeof state.entities.users[state.session.id].photoUrl !== 'string') {
  //   state.entities.users[state.session.id].photoUrl = ''
  // }
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    logout: () => dispatch(logout()),
    addFileToUser: (formData) => dispatch(addFileToUser(formData))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
