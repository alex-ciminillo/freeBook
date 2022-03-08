import React from 'react'
import SignupFormContainer from '../signup_form_container';
import ChoosePicsContainer from './../profile/choose_pics/choose_pics_container';
import WritePost from '../write_post/write_post';
import ComingSoon from '../coming_soon/coming_soon';

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
            case "writePost":
                return <WritePost createPost={this.props.createPost} hideModal={this.props.hideModal} info={this.props.info} currentUser={this.props.currentUser} />      
            case "comingSoon":
                return <ComingSoon hideModal={this.props.hideModal} info={this.props.info} currentUser={this.props.currentUser} />      
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












