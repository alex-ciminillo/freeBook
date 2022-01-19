import React from 'react'
import SignupFormContainer from '../signup_form_container';

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        console.log("woo")
    }

    renderContainer() {
        console.log("hi")
        switch (this.props.modal) {
            case "signup":
                console.log("hello")
                return <SignupFormContainer />
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












