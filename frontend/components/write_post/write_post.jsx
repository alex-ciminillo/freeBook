
import React from 'react'


export default class WritePost extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        console.log(this.props)
        return (
            <div className='writePostBackgroundFade' >
                <div className='writePostContainer' >
                    <div className='writePostTop' >
                        <div>
                            <div>Create Post</div>
                            
                        </div>
                        <div onClick={this.props.hideModal.bind(this)} >
                            <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/RZkmtYdsqev.png)', backgroundPosition: '-84px -67px', backgroundSize: 'auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                        </div>
                    </div>
                    <div className='writePostGrayLine' ></div>
                    <div className='writePostMiddle' >
                        <div className='writePostPicAndName' >
                            <div className='writePostProfilePicDiv' >
                                <div style={{backgroundImage: `url(${this.props.currentUser.photoUrl})`}} ></div>
                            </div>
                            <div className='writePostNameAndStatus' >
                                <div>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</div>
                                <div>
                                <img className="hu5pjgll lzf7d6o1" src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/axobuTi734a.png" alt="Public" height="12" width="12"/>
                                    <div>Public</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='writePostTextBox' >
                            <textarea placeholder="What's on your mind?" ></textarea>
                        </div>
                    </div>
                    <div className='writePostBottom' >
                        <div className='writePostAdd' >
                            <div className='writePostAddContent' >
                                <div>
                                    <div>Add to your post</div>
                                </div>
                                <div className='writePostAddContentIcons' >
                                    <div>
                                        <i data-visualcompletion="css-img" className="hu5pjgll bixrwtb6" style={{height: '24px', width: '24px', backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/PKsg-wPC0IX.png)', backgroundPosition: '0px -307px', backgroundSize: 'auto', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                    </div>
                                    <div>
                                        <i data-visualcompletion="css-img" className="hu5pjgll bixrwtb6" style={{height: '24px', width: '24px', backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/PKsg-wPC0IX.png)', backgroundPosition: '0px -282px', backgroundSize: 'auto', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='writePostButton' >
                            <div>Post</div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }


}
