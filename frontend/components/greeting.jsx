import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from "./login_form_container";

export default class Greeting extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        return this.props.currentUser ? (
        
            <div>
                <h2>Hello, {this.props.currentUser.username}!</h2>
                <button onClick={() => this.props.logout()} >Log Out</button>
                <br/>
                <Link to={`/users/${this.props.currentUser.id}`} >Profile</Link>
            </div>
        ) : (
            <div className='greetingContainer' >
                <h1 className='title' ><span className='titleF' >f</span>r<span className='title' >e<span className='espacing' >e</span></span>bo<span className='ospacing' >o</span><span className='titleF' >k</span></h1>
                <p className='connectFriends' >Connect with friends and the world around you on Freebook</p>
                <br/>
                <LoginFormContainer/>
            </div>
        )
    }

}

