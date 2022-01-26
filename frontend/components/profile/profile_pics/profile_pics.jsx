
import React from 'react'
import ProfileNavBarContainer from './../profile_nav_bar/profile_nav_bar_container'


export default class ProfilePics extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='totalContainer' >
                <div className='backgroundPicDiv'>
                    <img src={window.profileBackgroundURL}  className='backgroundPic' />
                    <div className='backgroundPicShadow' ></div>
                </div>
                <div className='backgroundPicCameraButtonOuterDiv2'>
                    <div className='backgroundPicCameraButtonOuterDiv'>
                        <div className='backgroundPicCameraButtonDiv' >
                            <i className='backgroundPicCameraButton' ></i>
                        </div>
                    </div>
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='profilePicDiv' >
                        <img src={window.profilePicURL} className='profilePic' />
                    </div>
                    <div className='profilePicCameraButtonDiv' >
                        <i className='profilePicCameraButton' ></i>
                    </div>
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='name' >Alexzander Ciminillo</div>
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='friendsNumber' >617 Friends</div>
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='friendsImages' >
                        <div className='friendPicDiv' >
                            <img src={window.friend1URL} className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src={window.friend2URL}  className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src={window.friend3URL}  className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src={window.friend4URL}  className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src={window.friend5URL}  className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src={window.friend6URL}  className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src={window.friend7URL}  className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src={window.friend8URL}  className='friendPic' />
                        </div>
                    </div>
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='addStoryAndEditButtonsDiv'>
                        <div className='addStoryEditProfileDiv' >
                            <div className='addStoryButton' >
                            <img className="addStoryIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/bR3-u2s-xwG.png" alt="" height="16" width="16"/>
                                Add to story
                            </div>
                            <div className='editProfileButton' >
                            <img className="editProfileIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png" alt="" height="16" width="16" /> 
                                Edit profile
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='grayLine' ></div> 
                </div>
                <ProfileNavBarContainer /> 
                
                
            </div>
        )
    }


}
