import React from "react";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

class NotFound extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="notFoundContainer"  >
                <div  className="notFoundNavBar">
                    <h1 onClick={()=>{this.props.history.push('/')}}  className='title' style={{color: 'white', cursor: 'pointer'}} ><span className='titleF' style={{color: 'white'}} >f</span>r<span className='title' style={{color: 'white'}} >e<span className='espacing' style={{color: 'white'}} >e</span></span>bo<span className='ospacing' style={{color: 'white'}} >o</span><span className='titleF' style={{color: 'white'}} >k</span></h1>
                    <div onClick={()=>{this.props.history.push('/')}} className="notFoundLogInButton" >
                        <div>
                            Sign Up
                        </div>
                    </div>
                </div>
                <div className="notFoundMiddle" >
                    <div>
                        This page isn't available
                    </div>
                    <div>
                        The link you followed may be broken, or the page may have been removed.
                    </div>
                    <i onClick={()=>{this.props.history.push('/')}} ></i>
                </div>
                <div className='greetingFooterDiv' style={{paddingTop: '250px', color: '#385898'}}  >
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

export default NotFound;