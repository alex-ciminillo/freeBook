import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import ProfileNavBar from './profile_nav_bar';
import { changeProfileNavbar } from '../../../actions/profile_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    profile: state.ui.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    logout: () => dispatch(logout()),
    changeProfileNavbar: (button) => dispatch(changeProfileNavbar(button))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNavBar);
