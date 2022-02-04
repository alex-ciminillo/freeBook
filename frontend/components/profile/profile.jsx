

import React from 'react'
import { backImages, profImages } from '../../util/image_util';
import ProfilePicsContainer from './profile_pics/profile_pics_container'

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            body: "",
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchComments();
        this.props.fetchPosts();
        this.props.getLikes();
        this.props.fetchFriends();
    }

    componentDidUpdate() {
        this.countLikes()
    }

    getProfilePhoto() {
        if (!this.props.users[this.userId]) return
        let tempPicNum = 0
        if (this.props.currentUser.id > 100) { 
            tempPicNum =  this.props.currentUser.id - 100 
        } else {
            tempPicNum = this.props.currentUser.id
        }
        if (this.props.currentUser.id < 195) {
            return this.props.users[this.props.currentUser.id].photoUrl ? 
            <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(${this.props.users[this.props.currentUser.id].photoUrl})`}}  ></div>
            : <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(${this.props.profImages[tempPicNum]})`}}  ></div>
        }
        return this.props.users[this.userId] ?
        this.props.users[this.props.currentUser.id].photoUrl ? 
        <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(${this.props.users[this.props.currentUser.id].photoUrl})`}}  ></div>
        : <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}}  ></div>
        : <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}}  ></div>
    }

    writePostModal() {
        this.props.showModal({modal: 'writePost'})
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    getPostsPic(key) {

        if (this.props.posts[key].photoUrl) {
            return  <div className='profileBottomPostsMiddleHeight' >
                        <div style={{backgroundImage: `url(${this.props.posts[key].photoUrl})`}} ></div>
                    </div>
        } else if (key < 1219 && key % 4 == 0) {
            let picNum = 0
            if (key > 1200) {
                picNum = (key - 1200)/4 
            } else if (key > 800) {
                picNum = (key - 800)/4  
            } else if (key > 400) {
                picNum = (key - 400)/4
            } else {
                picNum = key/4
            }
            return <div className='profileBottomPostsMiddleHeight' >
                        <div style={{backgroundImage: `url(${this.props.postImages[picNum]})`}} ></div>
                    </div>
        } else {
            return  <div className='profileBottomPostsMiddleNoHeight' >
                        <div style={{backgroundImage: `url(${this.props.posts[key].photoUrl})`}} ></div>
                    </div>
        }
    }

    handleComments(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('comment[author_id]', this.props.currentUser.id);
        formData.append('comment[body]', this.state.body);
        formData.append('comment[post_id]', e.currentTarget.id);
        
        this.props.createComment(formData);
        e.currentTarget.children[0].value = ''
    }

    checkComments(key) {
        this.hasComments = false;
        Object.keys(this.props.comments).map((ckey)=> {
            if (this.props.comments[ckey].postId == key) {
                this.hasComments = true;
            }
        })
        if (this.hasComments === false) {
            return null
        } else {
            return <div className='profileBottomPostsCommentsContainer' >
                        {this.getComments(key)}
                    </div>
        }
    }

    getCommentPic(ckey) {
        if (!this.props.comments) return 
        if (!this.props.users[this.props.comments[ckey].authorId]) return
        let tempPicNum = 0
        if (this.props.comments[ckey].authorId > 100) { 
            tempPicNum =  this.props.comments[ckey].authorId - 100 
        } else {
            tempPicNum = this.props.comments[ckey].authorId
        }
        if (this.props.comments[ckey].authorId < 195) {
            return this.props.users[this.props.comments[ckey].authorId].photoUrl ?
        <div style={{backgroundImage: `url(${this.props.users[this.props.comments[ckey].authorId].photoUrl})` }} ></div>
        : 
        <div style={{backgroundImage: `url(${this.props.profImages[tempPicNum]})`}} ></div>
        }


        return this.props.users[this.props.comments[ckey].authorId].photoUrl ?
        <div style={{backgroundImage: `url(${this.props.users[this.props.comments[ckey].authorId].photoUrl})` }} ></div>
        : 
        <div style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}} ></div>
    }

    checkCommentInfo(ckey) {
        if (!this.props.users[this.props.comments[ckey].authorId]) return
        return this.props.users ?
         <div key={ckey} className='profileBottomPostsComment' >
            <div>
                {this.getCommentPic(ckey)}
            </div>
            <div>
                <div onClick={()=>this.props.history.push(`/users/${this.props.comments[ckey].authorId}`)} >{this.props.users[this.props.comments[ckey].authorId].firstName} {this.props.users[this.props.comments[ckey].authorId].lastName}</div>
                <div>{this.props.comments[ckey].body}</div>
            </div>
        </div>
    :
    null
    }

    getComments(key) {
        return Object.keys(this.props.comments).map((ckey)=> {
            if (this.props.comments[ckey].postId == key) {
                return this.checkCommentInfo(ckey)
            }
        })
    }

    countLikes() {
        Object.keys(this.props.likes).map((key) => {
            if (this.props.likes[key].userId == this.props.currentUser.id) {
                $(`#likes${this.props.likes[key].postId}`).addClass('filterLike')
            }
        })
    }

    getNumberOfLikes(postId) {
        
        let counter = 0
        Object.keys(this.props.likes).map((key) => {
            if (this.props.likes[key].postId == postId) {
                counter += 1;
            }
        })
        return counter > 0 ? 
            <div className='postsNumberOfLikes' >
                <div>
                    <img className="j1lvzwm4" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="18"></img>
                    <div>{counter}</div>
                </div>
            </div> : null
    }

    createLike(postId) {
        let liked = false;
        Object.keys(this.props.likes).map((key) => {
            if (this.props.likes[key].postId == postId && this.props.likes[key].userId == this.props.currentUser.id) {
                $(`#likes${postId}`).removeClass('filterLike')
                this.props.deleteLike(this.props.likes[key].id)
                liked = true;
                return
            }
        })
        if (liked === true) { return }
        $(`#likes${postId}`).addClass('filterLike')
        this.props.addLike({
            like: {
                user_id: this.props.currentUser.id,
                post_id: postId
            }
        })
    }

    getMakeCommentPic() {
        if (!this.props.users[this.userId]) return

        let tempPicNum = 0;
        if (this.props.currentUser.id > 100) { 
            tempPicNum =  this.props.currentUser.id - 100 
        } else {
            tempPicNum = this.props.currentUser.id
        }
        if (this.props.currentUser.id < 195) {
            return this.props.currentUser.photoUrl ?
        <div style={{backgroundImage: `url(${this.props.currentUser.photoUrl})`}} ></div>
        :
        <div style={{backgroundImage: `url(${this.props.profImages[tempPicNum]})`}} ></div>
    }


        return this.props.currentUser.photoUrl ?
        <div style={{backgroundImage: `url(${this.props.currentUser.photoUrl})`}} ></div>
        :
        <div style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}} ></div>
    }

    checkProfilePhoto(key) {
        if (!this.props.users[this.userId]) return
        if (!this.props.users[this.props.posts[key].authorId]) return
        let tempPicNum = 0
        if (this.props.posts[key].authorId > 100) { 
            tempPicNum =  this.props.posts[key].authorId - 100 
        } else {
            tempPicNum = this.props.posts[key].authorId
        }
        if (this.props.posts[key].authorId < 195) {
            
            return this.props.users[this.props.posts[key].authorId].photoUrl ? 
            <div style={{backgroundImage: `url(${this.props.users[this.props.posts[key].authorId].photoUrl})`}} ></div>
            :
            <div style={{backgroundImage: `url(${this.props.profImages[tempPicNum]})`}} ></div>
        }

        return this.props.users[this.userId] ?
        this.props.users[this.userId].photoUrl ? 
        <div style={{backgroundImage: `url(${this.props.users[this.props.posts[key].authorId].photoUrl})`}} ></div>
        :
        <div style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}} ></div>
        :
        <div style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}} ></div>
    }

    getTime(date) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
        let dateArray = date.split('-')
        let month = months[parseInt(dateArray[1], 10) - 1]
        let day = parseInt(dateArray[2].slice(0,2), 10)
        let hour = parseInt(dateArray[2].slice(3,5), 10)
        let minute = parseInt(dateArray[2].slice(6,8), 10)
        let time = 'AM'
        hour > 11 ? time = 'PM' : time = 'AM'
        hour > 12 ? hour -= 12 : hour
        let fullTime = `${month} ${day} at ${hour}:${minute} ${time}`
        return fullTime
    }

    getPostInfo(key) {
        return this.props.users[this.props.posts[key].authorId] ?
        <div className='profileBottomPostsTopNameAndDate' >
            <div onClick={()=>this.props.history.push(`/users/${this.props.posts[key].authorId}`)} >{this.props.users[this.props.posts[key].authorId].firstName} {this.props.users[this.props.posts[key].authorId].lastName}</div>
            <div>{this.getTime(this.props.posts[key].createdAt)}</div>   
        </div> 
        : null
    }

    getPhotosArray() {
        let photosArray = [];
        Object.keys(this.props.posts).map((key) => {
            if (key < 1219 && key % 4 == 0) {
                let picNum = 0
                if (key > 1200) {
                    picNum = (key - 1200)/4 
                } else if (key > 800) {
                    picNum = (key - 800)/4  
                } else if (key > 400) {
                    picNum = (key - 400)/4
                } else {
                    picNum = key/4
                }
                if (this.props.posts[key].authorId == this.userId) {
                    photosArray.push(picNum)
                    return
                }
                this.props.posts[key].likes.map((like)=>{
                    if (like.userId == this.userId) {
                        photosArray.push(picNum)
                        return
                    }
                })
                
            }
        })
        return photosArray
    }

    getMyPhotos(number) {
        if (!this.props.posts) return
        let photosArray = this.getPhotosArray();
        return <div style={{backgroundImage: `url(${this.props.postImages[photosArray[number]]})`}} ></div>
    }

    getAllPosts() {
        if (Object.keys(this.props.posts).length < 1) return 
        let orderPosts = [];
        Object.keys(this.props.posts).map((key) => {
            orderPosts.unshift(this.props.posts[key].id)
        })

        return orderPosts.map((key)=> {
            let commented = false;
            Object.keys(this.props.comments).map((commentkey) => {
                if (this.props.comments[commentkey].postId == key && this.props.comments[commentkey].authorId == this.userId) {
                    commented = true;
                }
            })
            let liked = false;
            if(this.props.posts[key].likes) {
                this.props.posts[key].likes.map((likekey) => {
                    if (likekey.userId == this.userId) {
                        liked = true
                    }
                })
            } 
            
            
            if (this.props.posts[key].authorId == this.userId || commented === true || liked === true) {
                return <div key={key} className='profileBottomPostsContainer' >
                    <div className='profileBottomPostsTop' >
                        <div className='profileBottomPostsTopLeft' >
                            <div className='profileBottomPostsTopPicDiv' >
                                {this.checkProfilePhoto(key)}
                            </div>
                            {this.getPostInfo(key)}
                        </div>
                    </div>
                    <div className='profileBottomPostsMiddle' >
                        <div>{this.props.posts[key].body}</div>
                        {this.getPostsPic(key)}
                    </div>
                    {this.getNumberOfLikes(key)}
                    <div className='profileBottomPostsOptions' >
                        <div>
                            <div id={`likes${key}`} onClick={()=>this.createLike(key)} >
                                <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{backgroundImage: 'url(https://www.facebook.com/rsrc.php/v3/yV/r/YgkGk8qdJDo.png)', backgroundPosition: '0px -243px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                <div>Like</div>
                            </div>
                            <div>
                            <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{backgroundImage: 'url(https://www.facebook.com/rsrc.php/v3/yV/r/YgkGk8qdJDo.png)', backgroundPosition: '0px -205px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                <div>Comment</div>
                            </div>
                        </div>
                    </div>
                    {this.checkComments(key)}
                    <div className='profileBottomPostsBottom' >
                        <div className='profileBottomPostsBottomDiv' >
                            <div>
                                {this.getMakeCommentPic()}
                            </div>
                            <form id={key} onSubmit={this.handleComments.bind(this)} >
                                <input id={key} onChange={this.update('body')} type='text' placeholder='Write a comment...' />
                            </form>
                        </div>
                    </div>
                    
                </div>
            }
        })
    }

    profilePostText() {
        if (!this.props.users[this.userId]) return
        let value = `${this.userId}` === `${this.props.currentUser.id}`
        return value ?
        <div>
            What's on your mind?
        </div>
        :
        <div>
            Write something to {this.props.users[this.userId].firstName}...
        </div>
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
        return <div onClick={()=>this.props.history.push(`/users/${friendArray[number]}`)} className='profileBottomFriends'>
                    <div style={{backgroundImage: `url(${this.props.profImages[tempPicNum]})`}} ></div>
                    <div>{this.props.users[friendArray[number]].firstName} {this.props.users[friendArray[number]].lastName}</div>
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

    clearSearchBar() {
        $('#searchForUsersInput').val('')
        this.props.searchUsers({query: ''})
    }

    render() {
        console.log(this.props)
        this.userId = this.props.match.params.id
        this.user = this.props.users[this.userId]
        return (
            <div onClick={()=>this.clearSearchBar()} >
                <ProfilePicsContainer profImages={profImages} backImages={backImages} updateFriend={this.props.updateFriend} deleteFriend={this.props.deleteFriend} createFriend={this.props.createFriend} ownProps={this.props.ownProps} />
                <div className='profileBottomFullContainer' >
                    <div className='profileBottomInnerContainer'>
                        <div id='profileBottomLeftSide2' className='profileBottomLeftSide2 hideLeftSide' >

                        </div>
                        <div id='profileBottomLeftSide' className='profileBottomLeftSide' >
                            <div id='profileBottomIntroContainer' className='profileBottomIntroContainer' >
                                <div className='profileBottomIntroMiddle' >
                                    <div className='profileBottomIntroTitle' >
                                        Intro
                                    </div>
                                    <div onClick={()=>window.open('https://github.com/alex-ciminillo', '_blank')} className='profileBottomIntroButton' >
                                        <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                        <div>
                                            GitHub
                                        </div>
                                    </div>
                                    <div onClick={()=>window.open('https://www.linkedin.com/in/alexzander-ciminillo', '_blank')} className='profileBottomIntroButton' >
                                    <svg id="introLinkedIn" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  height="20" width="80" viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" version="1.1" focusable="false" className="lazy-loaded">
                                    <g className="inbug" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <path  d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0" className="bug-text-color" transform="translate(63.000000, 0.000000)"></path>
                                        <path fill="black" d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z" className="background" fill="currentColor"></path>
                                    </g>
                                    </svg>
                                        <div>
                                            LinkedIn
                                        </div>
                                    </div>
                                    <div onClick={()=>window.open('https://alex-ciminillo.github.io/tower_of_dreams/', '_blank')} className='profileBottomIntroButton' >
                                        <svg id="introJavascript" version="1.1" height="25" width="25" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 454.635 454.635" style={{enableBackground: 'new 0 0 454.635 454.635'}} >
                                        <path d="M286.306,301.929h-17.472L295.141,82.85c0.708-5.89-1.709-13.694-5.621-18.155L236.506,4.255
                                            C234.134,1.551,230.785,0,227.317,0s-6.816,1.551-9.188,4.255l-53.015,60.439c-3.912,4.461-6.328,12.266-5.621,18.155
                                            l26.307,219.079h-17.472c-8.412,0-15.256,6.844-15.256,15.256v18.984c0,8.412,6.844,15.256,15.256,15.256h37.118v33.143
                                            c-10.014,6.95-16.588,18.523-16.588,31.609c0,21.206,17.252,38.458,38.458,38.458s38.458-17.252,38.458-38.458
                                            c0-13.086-6.574-24.659-16.588-31.609v-33.143h37.118c8.412,0,15.256-6.844,15.256-15.256v-18.984
                                            C301.562,308.772,294.718,301.929,286.306,301.929z"/>
                                        </svg>
                                    <div>
                                            JavaScript
                                        </div>
                                    </div>
                                    <div onClick={()=>window.open('https://www.facebook.com/ACSC.CIMI/', '_blank')} className='profileBottomIntroButton' >
                                        <div id='introFIcon' >
                                        <svg  height="40" width="40" >
                                            <path fill="black"  d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"  />
                                            <path fill="#E4E6EB" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"   />
                                        </svg>
                                        </div>
                                        <div>
                                            Facebook
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='profileBottomPhotosContainer' className='profileBottomPhotosContainer' >
                                <div className='profileBottomPhotosTop' >
                                    <div>Photos</div>
                                    <div><div>See all photos</div></div>
                                    
                                </div>
                                <div className='profileBottomPhotosBottom' >
                                    <div className='profileBottomPhotosBottomRow' >
                                        {this.getMyPhotos(1)}
                                        {this.getMyPhotos(2)}
                                        {this.getMyPhotos(3)}
                                    </div>
                                    <div className='profileBottomPhotosBottomRow' >
                                    {this.getMyPhotos(4)}
                                        {this.getMyPhotos(5)}
                                        {this.getMyPhotos(6)}
                                    </div>
                                    <div className='profileBottomPhotosBottomRow' >
                                        {this.getMyPhotos(7)}
                                        {this.getMyPhotos(8)}
                                        {this.getMyPhotos(9)}
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div id='profileBottomFriendsContainer' className='profileBottomFriendsContainer' >
                                <div className='profileBottomFriendsTop' >
                                    <div>Friends</div>
                                    <div>
                                        <div>See all friends</div>
                                    </div>
                                </div>
                                <div className='profileBottomFriendsMiddle' >
                                    <div>{this.getNumberOfFriends()}</div>
                                </div>
                                <div className='profileBottomFriendsPicsContainer' >
                                    <div className='profileBottomFriendsPics' >
                                        <div className='profileBottomFriendsPicsRow' >
                                            {this.getFriendPic(1)}
                                            {this.getFriendPic(2)}
                                            {this.getFriendPic(3)}
                                        </div>
                                        <div className='profileBottomFriendsPicsRow' >
                                            {this.getFriendPic(4)}
                                            {this.getFriendPic(5)}
                                            {this.getFriendPic(6)}
                                        </div>
                                        <div className='profileBottomFriendsPicsRow' >
                                            {this.getFriendPic(7)}
                                            {this.getFriendPic(8)}
                                            {this.getFriendPic(9)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='profileBottomLifeContainer' className='profileBottomLifeContainer' >
                                <div className='profileBottomLifeTop' >
                                    <div>Life events</div>
                                    <div>
                                        <div>See All</div>
                                    </div>
                                </div>
                                <div className='profileBottomLifeBottom' >
                                    <div className='profileBottomLifeEvents' >
                                        <div className='profileBottomLifeEvent' >
                                            <div className='profileBottomLifeEventTop' >
                                                <div style={{backgroundImage: `url(${window.profileBackgroundURL})`}} ></div>
                                                <div style={{backgroundImage: `url(${window.friend6URL})`}} ></div>
                                            </div>
                                            <div className='profileBottomLifeEventIcon' >
                                                <img height="20" width="20" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/0sFQdwD-_Tc.png"/>
                                            </div>
                                            <div className='profileBottomLifeEventText' >Claire CIminillo and Alexzander Ciminillo Got Married</div>
                                            <div className='profileBottomLifeEventDate' >May 20, 2017</div>
                                        
                                        </div>
                                        <div className='profileBottomLifeEvent' >
                                            <div className='profileBottomLifeEventTop' >
                                                <div style={{backgroundImage: `url(${window.friend8URL})`}} ></div>
                                                <div style={{backgroundImage: `url(${window.friend5URL})`}} ></div>
                                            </div>
                                            <div className='profileBottomLifeEventIcon' >
                                                <img height="20" width="20" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/kLvKfX8XA_K.png"/>
                                            </div>
                                            <div className='profileBottomLifeEventText' >Got Engaged to Claire Ciminillo</div>
                                            <div className='profileBottomLifeEventDate' >November 5th, 2016</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='profileBottomCopyrightContainer' className='profileBottomCopyrightContainer' >
                                <div><span>Privacy</span><span> &middot; </span><span>Terms</span><span> &middot; </span><span>Advertising</span><span> &middot; </span><span>Ad Choices <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/RZkmtYdsqev.png)', backgroundPosition: '-162px -109px', backgroundSize: 'auto', width: '12px', height: '12px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i></span><span> &middot; </span><span>Cookies</span><span> &middot; </span><span>More</span><span> &middot; </span></div>    
                                <div>Mata © 2022</div>
                            </div>
                        </div>
                        <div className='profileBottomRightSide' >
                            <div className='profileBottomMakePostContainer' >
                                <div className='profileBottomMakePostInner' >
                                    <div className='profileBottomMakePostTop' >
                                        {this.getProfilePhoto()}
                                        <div onClick={this.writePostModal.bind(this)} className='profileBottomMakePostTopButton' >
                                            {this.profilePostText()}
                                        </div>
                                    </div>
                                    <div className='profileBottomMakePostGrayLine' ></div>
                                    <div className='profileBottomMakePostButtons' >
                                        <div className='profileBottomMakePostButtonsInner' >
                                            <div className='profileBottomMakePostButton' >
                                            <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" style={{fill: '#f3425f'}} className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 i2fa72qc rgmg9uty b73ngqbp"><g fillRule="evenodd" transform="translate(-444 -156)"><g><path d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z" transform="translate(354 158.5)"></path><path d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5" transform="translate(354 158.5)"></path></g></g></svg>
                                                <div>Live video</div>
                                            </div>
                                            <div onClick={this.writePostModal.bind(this)} className='profileBottomMakePostButton' >
                                            <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" style={{fill: '#45bd62'}} className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 n90h9ftp rgmg9uty b73ngqbp"><g fillRule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path><path fillRule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path></g></g></svg>
                                                <div>Photo/video</div>
                                            </div>
                                            <div onClick={this.writePostModal.bind(this)} className='profileBottomMakePostButton' >
                                            <i data-visualcompletion="css-img" style={{backgroundImage: 'url(https://www.facebook.com/rsrc.php/v3/yV/r/B4oMAjseW-y.png)', backgroundPosition: '-26px -238px', backgroundSize: '50px 500px', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                                <div>Life event</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='profileBottomPostsHeaderContainer' >
                                <div className='profileBottomPostsHeaderTop' >
                                    <div className='profileBottomPostsHeaderTopTitle'>
                                        <div>Posts</div>
                                    </div>
                                    <div className='profileBottomPostsHeaderTopButtons'>
                                        <div className='profileBottomPostsHeaderTopFilter' >
                                            <i data-visualcompletion="css-img"  style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/kiNqeI4QFAQ.png)', backgroundPosition: '0px -165px', backgroundSize: 'auto', width: '16px', height: '16px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                            <div>Filters</div>
                                        </div>
                                        <div className='profileBottomPostsHeaderTopManage' >
                                        <i data-visualcompletion="css-img" style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/kiNqeI4QFAQ.png)', backgroundPosition: '0px -369px', backgroundSize: 'auto', width: '16px', height: '16px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                            <div>Manage Posts</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='profileBottomPostsHeaderGrayLine' ></div>
                                 <div className='profileBottomPostsHeaderBottom' >
                                    <div className='profileBottomPostsHeaderBottomButton profileBottomPostsHeaderAccent' >
                                        <i data-visualcompletion="css-img" style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/kiNqeI4QFAQ.png)', backgroundPosition: '0px -318px', backgroundSize: 'auto', width: '16px', height: '16px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                        <div>List view</div>
                                    </div>
                                    <div className='profileBottomPostsHeaderBottomButton'>
                                    <i data-visualcompletion="css-img"  style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/kiNqeI4QFAQ.png)', backgroundPosition: '0px -216px', backgroundSize: 'auto', width: '16px', height: '16px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                        <div>Grid view</div>
                                    </div>
                                </div>
                            </div>
                            {this.getAllPosts()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}











