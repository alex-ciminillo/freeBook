

import React from 'react'
import ProfilePicsContainer from './profile_pics/profile_pics_container'

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <ProfilePicsContainer/>
                <div>Nav Bar</div>
                <div>Intro</div>
                <div>Photos</div>
                <div>Friends</div>
                <div>Life Events</div>
                <div>Posts</div>
            </div>
        )
    }


}











