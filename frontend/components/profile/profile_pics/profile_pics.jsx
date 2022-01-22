
import React from 'react'


export default class ProfilePics extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='totalContainer' >
                <div className='backgroundPicDiv'>
                    <img src='assets/profile/married.jpg' className='backgroundPic' />
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
                        <img src='assets/profile/profile_pic.jpg' className='profilePic' />
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
                            <img src='assets/profile/friends/friend_1.png' className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src='assets/profile/friends/friend_2.jpg' className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src='assets/profile/friends/friend_3.jpg' className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src='assets/profile/friends/friend_4.jpg' className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src='assets/profile/friends/friend_5.jpg' className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src='assets/profile/friends/friend_6.webp' className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src='assets/profile/friends/friend_7.jpg' className='friendPic' />
                        </div>
                        <div className='friendPicDiv' >
                            <img src='assets/profile/friends/friend_8.jpg' className='friendPic' />
                        </div>
                    </div>
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='addStoryAndEditButtonsDiv'>
                        <div className='addStoryDiv' >
                            <div className='addStoryButton' >
                            </div>
                            <div className='editProfileButton' >
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }


}
