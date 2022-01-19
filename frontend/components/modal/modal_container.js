import { hideModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = ({ ui }) => {
    return { modal: ui.modal }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);