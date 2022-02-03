import { hideModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = ({ ui, entities, session }, ownProps) => {
    return { 
        info: ui.modal,
        currentUser: entities.users[session.id]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal()),
        createPost: (formData) => dispatch(createPost(formData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);