
import React from 'react'
import { IconName } from "react-icons/fa";

export default class NewMessage extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div onClick={()=>this.props.showModal({modal: 'writePost'})} className='newMessageDiv' >
                <i className='newMessage' ></i>
            </div>
            )
        }

}
