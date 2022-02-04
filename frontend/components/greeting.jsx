import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from "./login_form_container";

export default class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            body: "",
        }
    }

    componentDidMount() {
        this.props.hideModal();
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
        } else if (key < 954 && key % 4 == 0) {
            let picNum = 0
            if (key > 800) {
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
        if (!this.props.currentUser) return
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
            if (key < 954 && key % 4 == 0) {
                let picNum = 0
                if (key > 800) {
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
            
            
            if (this.props.posts[key].authorId == this.userId) {
                return
            } else {
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

    getFriendRequestName() {
        if (!this.props.currentUser.friendRequests) return
        if (this.props.currentUser.friendRequests.length < 1) return
        console.log(this.props.users[this.props.currentUser.friendRequests[0].userId].firstName)
        return <div>{this.props.users[this.props.currentUser.friendRequests[0].userId].firstName} {this.props.users[this.props.currentUser.friendRequests[0].userId].lastName}</div>
    }

    getFriendRequestPic() {
        if (!this.props.currentUser.friendRequests) return

        let tempProfPic = 0;
        if (this.props.currentUser.friendRequests.length < 1) return
        if (this.props.currentUser.friendRequests[0].userId > 100) {
            tempProfPic = this.props.currentUser.friendRequests[0].userId - 100
        } else {
            tempProfPic = this.props.currentUser.friendRequests[0].userId
        }
        return <div style={{backgroundImage: `url(${this.props.profImages[tempProfPic]})`}} ></div>
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
        if (this.props.currentUser) {
            this.userId = this.props.currentUser.id
            this.user = this.props.currentUser
        }
        console.log(this.props)
        return this.props.currentUser ? (
            <div id='greetingMiddlePostsContainerTop' onClick={()=>this.clearSearchBar()} >
                <div className='profileBottomFullContainer3' >
                    <div className='profileBottomLeftSideOptionsContainer'>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                                {this.getProfilePhoto()}
                            </div>
                            <div>
                                <div>Alexzander Ciminillo</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                                <div style={{backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png)`}} ></div>
                            </div>
                            <div>
                                <div>Friends</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                            <div style={{backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png)`}} ></div>
                            
                            </div>
                            <div>
                                <div>Groups</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                            <div style={{backgroundImage: `url(	https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png)`}} ></div>
                            
                            </div>
                            <div>
                                <div>Marketplace</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                            <div style={{backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png)`}} ></div>
                            
                            </div>
                            <div>
                                <div>Memories</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                            <div style={{backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/WreZVYrGEZH.png)`}} ></div>
                            
                            </div>
                            <div>
                                <div>Community Help</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                            <div style={{backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png)`}} ></div>
                            
                            </div>
                            <div>
                                <div>Climate Science Center</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                            <div style={{backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png)`}} ></div>
                            
                            </div>
                            <div>
                                <div>COVID-19 Information Center</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptions' >
                            <div>
                            <div style={{backgroundImage: `url(	https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png)`}} ></div>
                            
                            </div>
                            <div>
                                <div>Fundraisers</div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptionsLine' ></div>
                    </div>
                </div>
                <div className='profileBottomFullContainer2' >
                    <div className='profileBottomInnerContainer2'>
                    <div className='profileBottomRightSide2' >
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
                <div className='profileBottomFullContainer4' >
                    <div className='profileBottomRightSideOptionsContainer'>
                        <div className='friendRequestsContainer' >
                            <div>
                                <div style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/851ZgTnFYJI.png)'}} ></div>
                                <div>Friend requests</div>
                            </div>
                            <div className='friendRequestsFriendPic' >
                                    <div>
                                        {this.getFriendRequestPic()}
                                    </div>
                                    {this.getFriendRequestName()}
                            </div>
                            <div className='friendRequestsConfirmButtons' >
                                <div><div>Confirm</div></div>
                                <div><div>Delete</div></div>
                            </div>
                        </div>
                        <div className='profileBottomLeftSideOptionsLine2' ></div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='greetingPageContainer' >
            <div className='greetingContainer' >
                <div>
                <h1 className='title' ><span className='titleF' >f</span>r<span className='title' >e<span className='espacing' >e</span></span>bo<span className='ospacing' >o</span><span className='titleF' >k</span></h1>
                <p className='connectFriends' >Connect with friends and the world<br/>around you on Freebook.</p>
                <p className='connectFriends2' >Connect with friends and the world around you on Freebook.</p>
                
                </div>
                <div>
                <div>
                    <LoginFormContainer/>
                </div>
                <div>
                    <div><span>Create a Page</span> for a celebrity, brand or business.</div>
                </div>
                </div>
            </div>
                <div className='greetingFooterDiv' >
                    <div>
                    <div className='greetingLanguages' >
                        <div>English (US)</div>
                        <div>Español</div>
                        <div>Français (France)</div>
                        <div>中文(简体)</div>
                        <div>العربية</div>
                        <div>Português (Brasil)</div>
                        <div>Italiano</div>
                        <div>한국어</div>
                        <div>हिन्दी</div>
                        <div>日本語</div>
                        <div className='greetingLanguagesPlus' >
                        <svg viewBox="0 0 20 20" width="1em" height="1em">
                            <g fillRule="evenodd" transform="translate(-446 -350)">
                                <g fillRule="nonzero">
                                    <path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path>
                                    <path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path>
                                </g>
                            </g>
                        </svg>
                        </div>
                    </div>
                    <div className='greetingGrayLine' >
                        <div></div>
                    </div>
                    <div className='greetingOptions' >
                    <div>Sign Up</div>
                    <div>Log In</div>
                    <div>Messenger</div>
                    <div>Facebook Lite</div>
                    <div>Watch</div>
                    <div>Places</div>
                    <div>Games</div>
                    <div>Marketplace</div>
                    <div>Facebook Pay</div>
                    <div>Oculus</div>
                    <div>Portal</div>
                    <div>Instagram</div>
                    <div>Bulletin</div>
                    <div>Local</div>
                    <div>Fundraisers</div>
                    <div>Services</div>
                    <div>Voting Information Center</div>
                    <div>Groups</div>
                    <div>About</div>
                    <div>Create Ad</div>
                    <div>Create Page</div>
                    <div>Developers</div>
                    <div>Careers</div>
                    <div>Privacy</div>
                    <div>Cookies</div>
                    <div>Ad Choices
                        <i className='adChoicesIcon' ></i>
                    </div>
                    <div>Terms</div>
                    <div>Help</div>
                    </div>
                    
                    <div className='grettingCopyright' >
                        Mata © 2022
                    </div>
                    </div>
                </div>
              </div>
        )
    }

}

