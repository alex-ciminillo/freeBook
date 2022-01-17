
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
        let tempPicNum = 0;
        if (this.props.currentUser.id > 100) {
            tempPicNum = this.props.currentUser.id - 100
        } else {
            tempPicNum = this.props.currentUser.id
        }
        if (this.props.currentUser.id < 52) {
            $('#profileBackgroundIMG').attr("src", `${this.props.backImages[tempPicNum]}`);
        } else {
            $('#profileBackgroundIMG').attr("src", `${this.props.users[this.userId].coverPhotoUrl}`);
        }
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

    getBackgroundPhoto() {
        if (!this.props.users[this.userId]) return

        let tempPicNum = 0;
        if (this.userId > 100) {
            tempPicNum = this.userId - 100
        } else {
            tempPicNum = this.userId
        }
        if (this.userId < 52) {
            return this.props.users[this.userId] ?
            this.props.users[this.userId].coverPhotoUrl ? 
            <img id="profileBackgroundIMG" src={this.props.users[this.userId].coverPhotoUrl}  className='backgroundPic' />
            : <img id="profileBackgroundIMG" src={this.props.backImages[tempPicNum]}  className='backgroundPic' />        
            : <img id="profileBackgroundIMG" src={this.props.backImages[tempPicNum]}  className='backgroundPic' />}

        return this.props.users[this.userId] ?
        this.props.users[this.userId].coverPhotoUrl ? 
        <img id="profileBackgroundIMG" src={this.props.users[this.userId].coverPhotoUrl}  className='backgroundPic' />
        : <img id="profileBackgroundIMG" style={{backgroundColor: '#f0f2f5'}}  className='backgroundPic' />        
        : <img id="profileBackgroundIMG" style={{backgroundColor: '#f0f2f5'}}  className='backgroundPic' />
    }

    getProfilePhoto() {

        if (!this.props.users[this.userId]) return

        let tempPicNum = 0;
        if (this.userId > 100) {
            tempPicNum = this.userId - 100
        } else {
            tempPicNum = this.userId
        }
        if (this.userId < 52) {
            return this.props.users[this.userId].photoUrl ? 
            <div className='profileImage' style={{backgroundImage: `url(${this.props.users[this.userId].photoUrl})`}}  ></div>
            : <div className='profileImage' style={{backgroundImage: `url(${this.props.profImages[tempPicNum]})`}}  ></div>
        }

        return this.props.users[this.userId] ?
        this.props.users[this.userId].photoUrl ? 
        <div className='profileImage' style={{backgroundImage: `url(${this.props.users[this.userId].photoUrl})`}}  ></div>
        : <div className='profileImage' style={{backgroundImage: `url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=7nKGH13yY-EAX-K9KD7&_nc_ht=scontent-lga3-1.xx&oh=00_AT9BBuUvWm9J43jocpWoJt8svsCCUAXJnLDuFb5sAyTcRw&oe=624BE7F8)`}}  ></div>
        : <div className='profileImage' style={{backgroundImage: `url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=7nKGH13yY-EAX-K9KD7&_nc_ht=scontent-lga3-1.xx&oh=00_AT9BBuUvWm9J43jocpWoJt8svsCCUAXJnLDuFb5sAyTcRw&oe=624BE7F8)`}}  ></div>
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

    getFriendshipStatus() {
        if (!this.props.currentUser.friendsRequested) { return }
        let div
        let requested = false;
        div = this.props.currentUser.friendsRequested.map((request)=>{
            if(request.friendId == this.userId) {
                requested = true;
                return request.status === 'pending' ? 
                <div key={request.id} onClick={()=>{this.props.deleteFriend(request.id)}} className='addStoryButton' >
                    <img className="addStoryIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/33EToHSZ94f.png" alt="" height="16" width="16"/>
                    Cancel Request
                </div>
                :
                <div key={request.id} className='addStoryButton' >
                    <img className="addStoryIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/33EToHSZ94f.png" alt="" height="16" width="16"/>
                    Friends
                </div>
            }
        })
        if (requested) { return div }
        div = this.props.currentUser.friendRequests.map((request)=>{
            if(request.userId == this.userId) {
                requested = true;
                return request.status === 'pending' ? 
                <div onClick={()=>this.props.updateFriend({friend: { id: request.id, status: 'accepted' }})} className='addStoryButton' >
                    <img className="addStoryIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/33EToHSZ94f.png" alt="" height="16" width="16"/>
                    Accept Friend
                </div>
                :
                <div className='addStoryButton' >
                    <img className="addStoryIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/33EToHSZ94f.png" alt="" height="16" width="16"/>
                    Friends
                </div>
            }
        })
        if (requested) { return div }
        return <div onClick={()=>this.makeFriendship()} className='addStoryButton' >
            <img className="addStoryIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/33EToHSZ94f.png" alt="" height="16" width="16"/>
                Add Friend
        </div>
    }

    makeFriendship() {
        let friendship = {friend: {user_id: this.props.currentUser.id, friend_id: this.userId, status: 'pending'}}
        this.props.createFriend(friendship)
    }

    deleteFriendRequest() {

    }

    getAddStoryButtons() {
        let value = `${this.userId}` === `${this.props.currentUser.id}`
        return value ?
            <div className='addStoryAndEditButtonsDiv'>
                <div className='addStoryEditProfileDiv' >
                    <div onClick={()=>this.props.showModal({modal: 'writePost'})}  className='addStoryButton' >
                    <img className="addStoryIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/bR3-u2s-xwG.png" alt="" height="16" width="16"/>
                        Add to story
                    </div>
                    <div onClick={()=>this.props.showModal({modal: 'comingSoon', feature: 'Editing'})} className='editProfileButton' >
                    <img className="editProfileIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png" alt="" height="16" width="16" /> 
                        Edit profile
                    </div>
                </div>
            </div> :
            <div className='addStoryAndEditButtonsDiv'>
                <div className='addStoryEditProfileDiv' >
                    {this.getFriendshipStatus()}
                    <div onClick={()=>this.props.showModal({modal: 'comingSoon', feature: 'Messenger'})} className='editProfileButton' >
                    <img className="editProfileIcon" src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/YIxFfN5ecJG.png" alt="" height="16" width="16" /> 
                        Message
                    </div>
                </div>
            </div>
    }


    getNumberOfFriends() {
        if (!this.props.users[this.userId]) return
        if (!this.props.users[this.userId].friendsRequested) return
        let count = 0;
        this.props.users[this.userId].friendsRequested.map((request)=>{
            if (request.status === "accepted") { count += 1 }
        })
        this.props.users[this.userId].friendRequests.map((request)=>{
            if (request.status === "accepted") { count += 1 }
        })
        return `${count} Friends`
    }

    getFriends() {
        if (!this.props.users[this.userId]) return
        if (!this.props.users[this.userId].friendsRequested) return
        let friendArray = [];
        this.props.users[this.userId].friendsRequested.map((request)=>{
            if (request.status === "accepted") { friendArray.push(request.friendId) }
        })
        this.props.users[this.userId].friendRequests.map((request)=>{
            if (request.status === "accepted") { friendArray.push(request.userId) }
        })
        return friendArray
    }

    getFriendPic(number) {
        
        if (!this.props.users[this.userId]) return
        if (!this.props.users[this.userId].friendsRequested) return
        let friendArray = this.getFriends();
        let tempPicNum = 0;
        if (friendArray[number] > 100) {
            tempPicNum = friendArray[number] - 100
        } else {
            tempPicNum = friendArray[number]
        }
        if (!friendArray[number]) return
        return <div onClick={()=>this.props.ownProps.history.push(`/users/${friendArray[number]}`)} className='friendPicDiv' >
                    <img src={this.props.profImages[tempPicNum]} className='friendPic' />
                </div>
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
                    <div className='friendsNumber' >{this.getNumberOfFriends()}</div>
                </div>
                <div className='profilePicMaxHeight' >
                    <div className='friendsImages' >
                        {this.getFriendPic(1)}
                        {this.getFriendPic(2)}
                        {this.getFriendPic(3)}
                        {this.getFriendPic(4)}
                        {this.getFriendPic(5)}
                        {this.getFriendPic(6)}
                        {this.getFriendPic(7)}
                        {this.getFriendPic(8)}
                    </div>
                </div>
                <div className='profilePicMaxHeight2' >
                    {this.getAddStoryButtons()}
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
