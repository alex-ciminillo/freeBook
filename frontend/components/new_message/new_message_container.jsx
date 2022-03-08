import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NewMessage from './new_message';
import { showModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(logout()),
    showModal: (type)=>dispatch(showModal(type)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
