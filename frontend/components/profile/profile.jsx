

import React from 'react'
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

    getProfilePhoto() {
        return this.props.users[this.userId] ?
        this.props.users[this.userId].photoUrl ? 
        <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(${this.props.users[this.userId].photoUrl})`}}  ></div>
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

    getComments(key) {
        return Object.keys(this.props.comments).map((ckey)=> {
            if (this.props.comments[ckey].postId == key) {
                return <div key={ckey} className='profileBottomPostsComment' >
                        <div>
                            <div style={{backgroundImage: `url(${this.props.users[this.props.comments[ckey].authorId].photoUrl})` }} ></div>
                        </div>
                        <div>
                            <div>{this.props.users[this.props.comments[ckey].authorId].firstName} {this.props.users[this.props.comments[ckey].authorId].lastName}</div>
                            <div>{this.props.comments[ckey].body}</div>
                        </div>
                    </div>
            }
        })
    }

    getNumberOfLikes(postId) {
        if (this.props.users[this.props.currentUser.id].likes) {
            this.props.users[this.props.currentUser.id].likes.map((key) => {
            if (key.postId == postId) {
                $(`#likes${postId}`).addClass('filterLike')
                return
            }
        })
        }
        
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
        this.props.users[this.props.currentUser.id].likes.map((key) => {
            if (key.postId == postId) {
                $(`#likes${postId}`).removeClass('filterLike')
                this.props.deleteLike(key.id)
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

    getAllPosts() {
        if (Object.keys(this.props.posts).length < 1) return 
        let orderPosts = [];
        Object.keys(this.props.posts).map((key) => {
            if (this.props.posts[key].authorId == this.userId) {
                orderPosts.unshift(this.props.posts[key].id)
            }
        })

        return orderPosts.map((key)=> {
            if (this.props.posts[key].authorId == this.userId) {
                return <div key={key} className='profileBottomPostsContainer' >
                    <div className='profileBottomPostsTop' >
                        <div className='profileBottomPostsTopLeft' >
                            <div className='profileBottomPostsTopPicDiv' >
                                <div style={{backgroundImage: `url(${this.props.users[this.props.posts[key].authorId].photoUrl})`}} ></div>
                            </div>
                            <div className='profileBottomPostsTopNameAndDate' >
                                <div>{this.props.users[this.props.posts[key].authorId].firstName} {this.props.users[this.props.posts[key].authorId].lastName}</div>
                                <div>{this.props.posts[key].createdAt}</div>
                            </div>
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
                                <div style={{backgroundImage: `url(${this.props.currentUser.photoUrl})`}} ></div>
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

    render() {
        console.log(this.props)
        this.userId = this.props.match.params.id
        this.user = this.props.users[this.userId]
        return (
            <div>
                <ProfilePicsContainer createFriend={this.props.createFriend} ownProps={this.props.ownProps} />
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
                                    <div className='profileBottomIntroButton' >
                                        <div>
                                            Add Bio
                                        </div>
                                    </div>
                                    <div className='profileBottomIntroButton' >
                                        <div>
                                            Edit details
                                        </div>
                                    </div>
                                    <div className='profileBottomIntroButton' >
                                        <div>
                                            Add Hobbies
                                        </div>
                                    </div>
                                    <div className='profileBottomIntroButton' >
                                        <div>
                                            Add Featured
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
                                        <div style={{backgroundImage: `url(${window.friend1URL})`}} ></div>
                                        <div style={{backgroundImage: `url(${window.friend2URL})`}} ></div>
                                        <div style={{backgroundImage: `url(${window.friend3URL})`}} ></div>
                                    </div>
                                    <div className='profileBottomPhotosBottomRow' >
                                        <div style={{backgroundImage: `url(${window.friend4URL})`}} ></div>
                                        <div style={{backgroundImage: `url(${window.friend5URL})`}} ></div>
                                        <div style={{backgroundImage: `url(${window.friend6URL})`}} ></div>
                                    </div>
                                    <div className='profileBottomPhotosBottomRow' >
                                        <div style={{backgroundImage: `url(${window.friend7URL})`}} ></div>
                                        <div style={{backgroundImage: `url(${window.friend8URL})`}} ></div>
                                        <div style={{backgroundImage: `url(${window.profileBackgroundURL})`}} ></div>
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
                                    <div>617 friends</div>
                                </div>
                                <div className='profileBottomFriendsPicsContainer' >
                                    <div className='profileBottomFriendsPics' >
                                        <div className='profileBottomFriendsPicsRow' >
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.friend8URL})`}} ></div>
                                                <div>Seth Ciminillo</div>
                                            </div>
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.friend7URL})`}} ></div>
                                                <div>Samantha Young</div>
                                            </div>
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.friend6URL})`}} ></div>
                                                <div>David Young</div>
                                            </div>
                                        </div>
                                        <div className='profileBottomFriendsPicsRow' >
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.friend5URL})`}} ></div>
                                                <div>Sabrina Clark</div>
                                            </div>
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.friend4URL})`}} ></div>
                                                <div>Austin Ciminillo</div>
                                            </div>
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.friend3URL})`}} ></div>
                                                <div>Amanda Sutton</div>
                                            </div>
                                        </div>
                                        <div className='profileBottomFriendsPicsRow' >
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.friend2URL})`}} ></div>
                                                <div>Betsy Ulrich</div>
                                            </div>
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.friend1URL})`}} ></div>
                                                <div>Julie Woodruff</div>
                                            </div>
                                            <div className='profileBottomFriends'>
                                                <div style={{backgroundImage: `url(${window.profileBackgroundURL})`}} ></div>
                                                <div>Claire Dahlke</div>
                                            </div>
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
                                            <div>
                                                What's on your mind?
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profileBottomMakePostGrayLine' ></div>
                                    <div className='profileBottomMakePostButtons' >
                                        <div className='profileBottomMakePostButtonsInner' >
                                            <div className='profileBottomMakePostButton' >
                                            <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" style={{fill: '#f3425f'}} className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 i2fa72qc rgmg9uty b73ngqbp"><g fillRule="evenodd" transform="translate(-444 -156)"><g><path d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z" transform="translate(354 158.5)"></path><path d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5" transform="translate(354 158.5)"></path></g></g></svg>
                                                <div>Live video</div>
                                            </div>
                                            <div className='profileBottomMakePostButton' >
                                            <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" style={{fill: '#45bd62'}} className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 n90h9ftp rgmg9uty b73ngqbp"><g fillRule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path><path fillRule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path></g></g></svg>
                                                <div>Photo/video</div>
                                            </div>
                                            <div className='profileBottomMakePostButton' >
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











