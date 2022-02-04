import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { profImages, backImages, postImages } from '../../util/image_util'
import { searchUsers } from './../../actions/user_actions'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    search: state.entities.search,
    profImages
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(logout()),
           searchUsers: (query) => dispatch(searchUsers(query)) 
          }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
