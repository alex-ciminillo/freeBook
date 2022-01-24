
import React from 'react'


export default class ProfileNavBar extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='navBarTotalContainer' >
                <div className='profileNavBar' >
                    <div id='posts' className='profileNavButtons' >
                        <div  className='profileNavButtonsWord' >Posts</div>
                    </div>
                    <div id='about' className='profileNavButtons' >
                        <div className='profileNavButtonsWord' >About</div>
                    </div>
                    <div id='friends' className='profileNavButtons' >
                        <div className='profileNavButtonsWord' >Friends</div>
                    </div>
                    <div id='photos' className='profileNavButtons' >
                        <div className='profileNavButtonsWord' >Photos</div>
                    </div>
                    <div id='more' className='profileNavButtons' >
                        <div className='profileNavButtonsWord' >More</div>
                            <svg viewBox="0 0 20 20" width="1em" height="1em" className="profileNavBarMoreIcon">
                                <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
                            </svg>
                    </div>
                    <div className='profileNavButtons' >
                        <div className='profileNavButtonsOptions' >
                        <svg viewBox="0 0 24 24" width="1em" height="1em">
                            <circle cx="12" cy="12" r="2.5"></circle>
                            <circle cx="19.5" cy="12" r="2.5"></circle>
                            <circle cx="4.5" cy="12" r="2.5"></circle>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
