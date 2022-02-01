import { hideModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = ({ ui, entities, session }, ownProps) => {
    return { 
        info: ui.modal,
        currentUser: entities.users[session.id]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);