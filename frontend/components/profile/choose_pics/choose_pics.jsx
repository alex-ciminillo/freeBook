
import React from 'react'


export default class ChoosePics extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            photoUrl: null
        }
        this.handlePreview();
    }

    handlePreview() {
        if (!this.props.info.file) return
        const file = this.props.info.file
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        fileReader.readAsDataURL(file);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.photoFile) return;
        const formData = new FormData();
        formData.append('user[profpic]', this.state.photoFile)
        const data = { data: formData, id: this.props.currentUser.id };
        this.props.addFileToUser(data)
        $(".profileImage").css("background-image", "url(" + this.state.photoUrl + ")");
        this.props.hideModal();
    }

    render() {
        return (
            <div className='backgroundFade' >
                <div className='chooseProfilePicsContainer' >
                    <div className='chooseProfilePicsTop' >
                        <div>
                            Update profile picture
                        </div>
                        <div onClick={this.props.hideModal.bind(this)} >
                            <i>

                            </i>
                        </div>
                    </div>
                    <div className='chooseProfilePicsTopLine' ></div>

                    <div className='chooseProfilePicsMiddle'>
                        <div>
                            <img src={this.state.photoUrl} />
                        </div>
                        <div>
                            <i></i>
                            <div>Your profile picture is public</div>
                        </div>
                    </div>
                    <div className='chooseProfilePicsTopLine' ></div>
                    <div className='chooseProfilePicsBottom' >
                        <div>
                            <div onClick={this.props.hideModal.bind(this)} >Cancel</div>
                        </div>
                        <div>
                            <div onClick={this.handleSubmit.bind(this)} >Save</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
