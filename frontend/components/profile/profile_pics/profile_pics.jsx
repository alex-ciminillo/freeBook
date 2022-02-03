
import React from 'react'
import ProfileNavBarContainer from './../profile_nav_bar/profile_nav_bar_container'


export default class ProfilePics extends React.Component {

    constructor(props) {
        super(props)
    }

    handleFile(e) {
        this.props.showModal({modal:'profilePic', file: e.target.files[0]})  
    }

    handleBackgroundFile(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        this.event = e;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            $('#profileBackgroundIMG').attr("src", `${fileReader.result}`)
            $('#backgroundPicChoiceBar').addClass('backgroundPicChoiceBarShow')
        };
        fileReader.readAsDataURL(file);
    }

    handleCancelChangeBackground() {
        this.event.target.value = '';
        $('#profileBackgroundIMG').attr("src", `${this.props.users[this.userId].coverPhotoUrl}`);
        $('#backgroundPicChoiceBar').removeClass('backgroundPicChoiceBarShow');
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.event.target.files[0]) return;
        const formData = new FormData();
        formData.append('user[coverpic]', this.event.target.files[0])
        const data = { data: formData, id: this.props.currentUser.id };
        this.props.addFileToUser(data)
        $('#backgroundPicChoiceBar').removeClass('backgroundPicChoiceBarShow');
    }

    getProfilePhoto() {
        return this.props.users[this.userId] ?
        this.props.users[this.userId].photoUrl ? 
        <div className='profileImage' style={{backgroundImage: `url(${this.props.users[this.userId].photoUrl})`}}  ></div>
        : <div className='profileImage' style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}}  ></div>
        : <div className='profileImage' style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}}  ></div>
    }

    getBackgroundPhoto() {
        return this.props.users[this.userId] ?
        this.props.users[this.userId].coverPhotoUrl ? 
        <img id="profileBackgroundIMG" src={this.props.users[this.userId].coverPhotoUrl}  className='backgroundPic' />
        : <img id="profileBackgroundIMG" style={{backgroundColor: '#f0f2f5'}}  className='backgroundPic' />        
        : <img id="profileBackgroundIMG" style={{backgroundColor: '#f0f2f5'}}  className='backgroundPic' />
    }

    getProfileBackgroundEditButton() {
        let value = `${this.userId}` === `${this.props.currentUser.id}`
        return value ?
        <div className='backgroundPicCameraButtonOuterDiv2'>
            <div className='backgroundPicCameraButtonOuterDiv'>
                <label className='backgroundPicCameraButtonDiv' >
                    <i className='backgroundPicCameraButton' ></i>
                    <input id='backgroundFileInput' accept="image/*,image/heif,image/heic" onChange={this.handleBackgroundFile.bind(this)} className='profilePicUploadInput' type="file" />
                </label>
            </div>
        </div> 
        : null

    }

    getProfilePicEditButton() {
        let value = `${this.userId}` === `${this.props.currentUser.id}`
        return value ?
          <label className='profilePicCameraButtonDiv' >
            <i className='profilePicCameraButton' ></i>
            <input accept="image/*,image/heif,image/heic" onChange={this.handleFile.bind(this)} className='profilePicUploadInput' type="file" />
        </label> 
        : null
    }

    getUserName() {
        return this.user ?
        `${this.user.firstName} ${this.user.lastName}`
        : ''
    }

    render() {
        this.userId = this.props.ownProps.match.params.id
        this.user = this.props.users[this.userId]
        return (
            <div id='profilePicsContainerTopOfPage' className='totalContainer' >
                <div id='backgroundPicChoiceBar' className='backgroundPicChoiceBar' >
                    <div>
                        <i></i>
                        <div>Your cover photo is public.</div>
                    </div>
                    <div>
                        <div onClick={this.handleCancelChangeBackground.bind(this)} >
                            <div>Cancel</div>
                        </div>
                        <div>
                            <div onClick={this.handleSubmit.bind(this)} >Save Changes</div>
                        </div>
                    </div>
                </div>
                <div className='backgroundPicDiv'>
                    {this.getBackgroundPhoto()}
                    <div className='backgroundPicShadow' ></div>
                </div>
                {this.getProfileBackgroundEditButton()}
                <div className='profilePicMaxHeight' >
                    <div className='profilePicDiv' >
                        <div className='profilePic' >
                            {this.getProfilePhoto()}
                        </div>
                    </div>
                    {this.getProfilePicEditButton()}
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='name' >{this.getUserName()}</div>
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
                <div className='profilePicMaxHeight2' >
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
                <div className='profilePicMaxHeight3' >
                    <div className='grayLine' ></div> 
                </div>
                <div className='profilePicMaxHeight3' >
                    <ProfileNavBarContainer /> 
                </div>
            </div>
        )
    }


}
