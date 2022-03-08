import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { profImages, backImages, postImages } from '../../util/image_util'
import { searchUsers } from './../../actions/user_actions'
import { showModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    search: state.entities.search,
    profImages
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(logout()),
           searchUsers: (query) => dispatch(searchUsers(query)),
           showModal: (type)=>dispatch(showModal(type))
          }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
