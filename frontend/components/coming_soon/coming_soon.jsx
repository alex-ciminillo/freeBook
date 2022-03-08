
import React from 'react'


export default class ComingSoon extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='writePostBackgroundFade' >
                <div id='writePostContainer' className='comingSoonContainer' >
                    <div className='writePostTop' >
                        <div>
                            <div>{this.props.info.feature} Coming Soon!</div>
                            
                        </div>
                        <div onClick={this.props.hideModal.bind(this)} >
                            <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/RZkmtYdsqev.png)', backgroundPosition: '-84px -67px', backgroundSize: 'auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                        </div>
                    </div>
                    <div className='writePostGrayLine' ></div>
                    <div className='comingSoonMiddle' >
                        <div>The {this.props.info.feature} feature is not ready yet!</div>
                       <div>For a list of all available features, please visit <a href='https://github.com/alex-ciminillo/freeBook' target="_blank" >Freebook's Github</a></div>
                    </div>
                </div>
            </div> 
        )
    }


}
