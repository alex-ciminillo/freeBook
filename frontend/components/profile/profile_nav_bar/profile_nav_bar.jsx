
import React from 'react'


export default class ProfileNavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    highlightButton() {
        $('#postsNavButton').removeClass('highlightProfileNavButtons')
        $('#aboutNavButton').removeClass('highlightProfileNavButtons')
        $('#friendsNavButton').removeClass('highlightProfileNavButtons')
        $('#photosNavButton').removeClass('highlightProfileNavButtons')
        if (this.props.profile.button === 'about') {
            $('#aboutNavButton').addClass('highlightProfileNavButtons')
        } else if (this.props.profile.button === 'friends') {
            $('#friendsNavButton').addClass('highlightProfileNavButtons')
        } else if (this.props.profile.button === 'photos') {
            $('#photosNavButton').addClass('highlightProfileNavButtons')
        } else {
            $('#postsNavButton').addClass('highlightProfileNavButtons')
        }
    }

    render() {
        this.highlightButton()
        return (
                <div className='profileNavBar' >
                    <div>
                        <div id='postsNavButton' onClick={this.props.changeProfileNavbar.bind(this, 'posts')} className='profileNavButtons highlightProfileNavButtons' >
                            <div  className='profileNavButtonsWord' >Posts</div>
                        </div>
                        <div id='aboutNavButton' onClick={()=>this.props.showModal({modal: 'comingSoon', feature: 'About Page'})} className='profileNavButtons' >
                            <div className='profileNavButtonsWord' >About</div>
                        </div>
                        <div id='friendsNavButton' onClick={()=>this.props.showModal({modal: 'comingSoon', feature: 'Friends Page'})} className='profileNavButtons' >
                            <div className='profileNavButtonsWord' >Friends</div>
                        </div>
                        <div id='photosNavButton' onClick={()=>this.props.showModal({modal: 'comingSoon', feature: 'Photos Page'})} className='profileNavButtons' >
                            <div className='profileNavButtonsWord' >Photos</div>
                        </div>
                        {/* <div id='moreNavButton' className='profileNavButtons' >
                            <div className='profileNavButtonsWord' >More</div>
                            <svg viewBox="0 0 20 20" width="1em" height="1em" className="profileNavBarMoreIcon">
                                <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
                            </svg>
                        </div> */}
                    </div>
                    {/* <div>
                        <div className='profileNavButtons2' >
                            <div className='profileNavButtonsOptions' >
                                <svg viewBox="0 0 24 24" width="1em" height="1em">
                                    <circle cx="12" cy="12" r="2.5"></circle>
                                    <circle cx="19.5" cy="12" r="2.5"></circle>
                                    <circle cx="4.5" cy="12" r="2.5"></circle>
                                </svg>
                            </div>
                        </div>
                    </div> */}
                </div>
          
        )
    }


}
