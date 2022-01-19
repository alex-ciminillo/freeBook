import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return this.props.currentUser ? (
            <hgroup>
                <h2>Hello, {this.props.currentUser.username}!</h2>
                <button onClick={this.props.logout}>Log Out</button>
                <Link to="/login">Login</Link>
            </hgroup>
        ) : (
            <nav>
                <Link to="/login">Login</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link>
            </nav>
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
