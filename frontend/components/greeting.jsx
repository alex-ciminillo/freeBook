import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from "./login_form_container";

export default class Greeting extends React.Component {

    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.hideModal()
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
            <div className='greetingPageContainer' >
            <div className='greetingContainer' >
                <div>
                <h1 className='title' ><span className='titleF' >f</span>r<span className='title' >e<span className='espacing' >e</span></span>bo<span className='ospacing' >o</span><span className='titleF' >k</span></h1>
                <p className='connectFriends' >Connect with friends and the world<br/>around you on Freebook.</p>
                <p className='connectFriends2' >Connect with friends and the world around you on Freebook.</p>
                
                </div>
                <div>
                <div>
                    <LoginFormContainer/>
                </div>
                <div>
                    <div><span>Create a Page</span> for a celebrity, brand or business.</div>
                </div>
                </div>
            </div>
                <div className='greetingFooterDiv' >
                    <div>
                    <div className='greetingLanguages' >
                        <div>English (US)</div>
                        <div>Español</div>
                        <div>Français (France)</div>
                        <div>中文(简体)</div>
                        <div>العربية</div>
                        <div>Português (Brasil)</div>
                        <div>Italiano</div>
                        <div>한국어</div>
                        <div>हिन्दी</div>
                        <div>日本語</div>
                        <div className='greetingLanguagesPlus' >
                        <svg viewBox="0 0 20 20" width="1em" height="1em">
                            <g fillRule="evenodd" transform="translate(-446 -350)">
                                <g fillRule="nonzero">
                                    <path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path>
                                    <path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path>
                                </g>
                            </g>
                        </svg>
                        </div>
                    </div>
                    <div className='greetingGrayLine' >
                        <div></div>
                    </div>
                    <div className='greetingOptions' >
                    <div>Sign Up</div>
                    <div>Log In</div>
                    <div>Messenger</div>
                    <div>Facebook Lite</div>
                    <div>Watch</div>
                    <div>Places</div>
                    <div>Games</div>
                    <div>Marketplace</div>
                    <div>Facebook Pay</div>
                    <div>Oculus</div>
                    <div>Portal</div>
                    <div>Instagram</div>
                    <div>Bulletin</div>
                    <div>Local</div>
                    <div>Fundraisers</div>
                    <div>Services</div>
                    <div>Voting Information Center</div>
                    <div>Groups</div>
                    <div>About</div>
                    <div>Create Ad</div>
                    <div>Create Page</div>
                    <div>Developers</div>
                    <div>Careers</div>
                    <div>Privacy</div>
                    <div>Cookies</div>
                    <div>Ad Choices
                        <i className='adChoicesIcon' ></i>
                    </div>
                    <div>Terms</div>
                    <div>Help</div>
                    </div>
                    
                    <div className='grettingCopyright' >
                        Mata © 2022
                    </div>
                    </div>
                </div>
              </div>
        )
    }

}

