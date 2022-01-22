
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
                <div></div>
            </div>
        )
    }


}
