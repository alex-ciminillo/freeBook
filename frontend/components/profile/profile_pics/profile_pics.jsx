
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
                </div>
            </div>
        )
    }


}
