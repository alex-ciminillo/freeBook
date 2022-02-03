import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { fetchUsers } from './../../actions/user_actions'
import { showModal } from '../../actions/modal_actions';
import { fetchPosts } from '../../actions/post_actions'
import { fetchComments, createComment } from '../../actions/comment_actions';
import { getLikes, addLike, deleteLike } from '../../actions/like_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    posts: state.entities.posts,
    comments: state.entities.comments,
    likes: state.entities.likes,
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    logout: () => dispatch(logout()),
    fetchUsers: ()=>dispatch(fetchUsers()),
    showModal: (type)=>dispatch(showModal(type)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    createComment: (comment) => dispatch(createComment(comment)),
    getLikes: ()=> dispatch(getLikes()),
    addLike: (like)=> dispatch(addLike(like)),
    deleteLike: (id)=> dispatch(deleteLike(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
