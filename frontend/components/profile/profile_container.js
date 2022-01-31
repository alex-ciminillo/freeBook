import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { fetchOtherUser } from './../../actions/user_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    logout: () => dispatch(logout()),
    fetchOtherUser: (id)=>dispatch(fetchOtherUser(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
