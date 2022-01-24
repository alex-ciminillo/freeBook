

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
                <div>Posts</div>
                <div onClick={()=>this.props.logout()} >Logout</div>
            </div>
        )
    }


}











