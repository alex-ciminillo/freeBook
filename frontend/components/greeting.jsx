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


// const Greeting = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );
//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

//   return currentUser ? personalGreeting() : sessionLinks();
// };


// export default Greeting;
