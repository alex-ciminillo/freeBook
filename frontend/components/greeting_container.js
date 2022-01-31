import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Greeting from './greeting';
import { hideModal } from './../actions/modal_actions';
import { changeProfileNavbar } from './../actions/profile_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    logout: () => dispatch(logout()),
    hideModal: ()=> dispatch(hideModal()),
    changeProfileNavbar: (button) => dispatch(changeProfileNavbar(button))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
