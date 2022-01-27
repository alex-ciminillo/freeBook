

import React from 'react'
import ProfilePicsContainer from './profile_pics/profile_pics_container'

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photoUrl: null
        };
    }

    handleFile(e) {
        this.setState({photoUrl: e.target.files[0]});
        // const fileReader = new FileReader();
        // fileReader.onloadend = () => {
        //   setPhotoURL(fileReader.result)
        //   setFile(file);
        // }
        // if (file) {
        //   fileReader.readAsDataURL(file);
        // }
    }

    handleSubmit(e) {
        console.log(this.props)
        e.preventDefault();
        if (!this.state.photoUrl) return;
        const formData = new FormData();
        formData.append('user[profpic]', this.state.photoUrl)
        const data = { data: formData, id: this.props.currentUser.id };
        this.props.addFileToUser(data)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ProfilePicsContainer/>
                <div>Posts</div>
                <div onClick={()=>this.props.logout()} >Logout</div>
                <div>
                    <label>
                        <input accept="image/*,image/heif,image/heic" onChange={this.handleFile.bind(this)} className='profilePicUploadInput' type="file" />
                            Custom Upload
                    </label>
                    <div onClick={this.handleSubmit.bind(this)} >Submit</div>
                </div>
            </div>
        )
    }


}











