import React from 'react'
import SignupFormContainer from '../signup_form_container';
import ChoosePicsContainer from './../profile/choose_pics/choose_pics_container';

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    renderContainer() {
        if (!this.props.info) return
        switch (this.props.info.modal) {
            case "signup":
                return <SignupFormContainer />
            case "profilePic":
                return <ChoosePicsContainer info={this.props.info} />
            default:
                return null;
        }
    }


    render() {
        return ( 
            <div>
                {this.renderContainer()}
            </div>
        )
    }

}












