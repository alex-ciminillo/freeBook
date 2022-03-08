import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ComingSoon from './coming_soon';
import { hideModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(logout()),
           hideModal: ()=> dispatch(hideModal())
}
};

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
