
import React from 'react'


export default class WritePost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            body: "",
            photoFile: null,
            photoUrl: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result })
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('post[author_id]', this.props.currentUser.id);
        formData.append('post[body]', this.state.body);

        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }

        this.props.createPost(formData);
        this.props.hideModal();
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    getPhoto() {
        if (this.state.photoUrl) {
            $('#writePostContainer').addClass('writePostWithPic')
            $('#writePostMiddle').addClass('writePostMiddleWithPic')
            $('#writePostTextBox').addClass('writePostTextBoxWithPic')
        }
        return this.state.photoUrl ? 
        <div className='writePostPhotoDiv' >
            <div style={{backgroundImage: `url(${this.state.photoUrl})`}} ></div>
        </div> :
        null
    }

    render() {
        return (
            <div className='writePostBackgroundFade' >
                <div id='writePostContainer' className='writePostContainer' >
                    <div className='writePostTop' >
                        <div>
                            <div>Create Post</div>
                            
                        </div>
                        <div onClick={this.props.hideModal.bind(this)} >
                            <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/RZkmtYdsqev.png)', backgroundPosition: '-84px -67px', backgroundSize: 'auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                        </div>
                    </div>
                    <div className='writePostGrayLine' ></div>
                    <div id='writePostMiddle' className='writePostMiddle' >
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
                        <div id='writePostTextBox' className='writePostTextBox' >
                            <textarea onChange={this.update('body')} placeholder="What's on your mind?" ></textarea>
                        </div>
                        {this.getPhoto()}
                    </div>
                    <div className='writePostBottom' >
                        <div className='writePostAdd' >
                            <div className='writePostAddContent' >
                                <div>
                                    <div>Add to your post</div>
                                </div>
                                <div className='writePostAddContentIcons' >
                                    <label>
                                        <i data-visualcompletion="css-img" className="hu5pjgll bixrwtb6" style={{height: '24px', width: '24px', backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/PKsg-wPC0IX.png)', backgroundPosition: '0px -307px', backgroundSize: 'auto', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                        <input type='file' onChange={this.handleFile.bind(this)} style={{display: 'none'}} />
                                    </label>
                                    <div>
                                        <i data-visualcompletion="css-img" className="hu5pjgll bixrwtb6" style={{height: '24px', width: '24px', backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/PKsg-wPC0IX.png)', backgroundPosition: '0px -282px', backgroundSize: 'auto', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={this.handleSubmit.bind(this)} className='writePostButton' >
                            <div>Post</div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }


}
