

import React from 'react'
import ProfilePicsContainer from './profile_pics/profile_pics_container'

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchOtherUser(this.props.match.params.id)
    }

    getProfilePhoto() {
        return this.props.users[this.userId] ?
        this.props.users[this.userId].photoUrl ? 
        <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(${this.props.users[this.userId].photoUrl})`}}  ></div>
        : <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}}  ></div>
        : <div className='profileBottomMakePostTopPic' style={{backgroundImage: `url(https://scontent-iad3-2.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Q5ak-pGAUEQAX8FR-Ea&_nc_ht=scontent-iad3-2.xx&oh=00_AT87ogNS2K3cMHTBP8OwAOgsIZczZWLAO2HT8GkSuwEdpg&oe=62187D78)`}}  ></div>
    }

    render() {
        console.log(this.props)
        this.userId = this.props.match.params.id
        this.user = this.props.users[this.userId]
        return (
            <div>
                <ProfilePicsContainer ownProps={this.props.ownProps} />
                <div className='profileBottomFullContainer' >
                    <div className='profileBottomInnerContainer'>
                        <div className='profileBottomLeftSide' >
                            <div className='profileBottomIntroContainer' >
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
                            <div className='profileBottomPhotosContainer' >
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
                            <div className='profileBottomFriendsContainer' >
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
                            <div className='profileBottomLifeContainer' >
                                <div className='profileBottomLifeTop' >
                                    <div>Life events</div>
                                    <div>
                                        <div>See All</div>
                                    </div>
                                </div>
                                <div className='profileBottomLifeBottom' >

                                </div>
                            </div>
                            <div className='profileBottomCopyrightContainer' >

                            </div>
                        </div>
                        <div className='profileBottomRightSide' >
                            <div className='profileBottomMakePostContainer' >
                                <div className='profileBottomMakePostInner' >
                                    <div className='profileBottomMakePostTop' >
                                        {this.getProfilePhoto()}
                                        <div className='profileBottomMakePostTopButton' >
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
                            <div className='profileBottomPostsContainer' >
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>Posts</div>
                <div onClick={()=>this.props.logout()} >Logout</div> */}
            </div>
        )
    }


}











