
import React from 'react'


export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='outerNavBar' >
                <div className='navBarGroupLeft' >
                <div className='ficonDiv' >
                <svg height="40" width="40" >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="5%" stopColor="#18AEFE" />
                            <stop offset="95%" stopColor="#0062E0" />
                        </linearGradient>
                    </defs>
                    <path className='outerFIcon' fill="url(#gradient)" d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"/>
                    <path className="fIcon" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" />
                </svg>
                </div>
                <div className='searchDiv' >
                <svg width='100' height='100' >
                <g fillRule="evenodd" transform="translate(-448 -544)">
                    <g fillRule='nonzero' >
                        <path fill='#65676B' d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path>
                        <path fill='#65676B' d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path>
                        <path fill='#65676B' d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path>
                        <path fill='#65676B' d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path>
                    </g>
                </g>
                </svg>
                </div>
                <div className='sandwichMenuDiv' >
                <span className='sandwichMenu' >
                    <svg height="28" width="28">
                        <path fill='#65676B' d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
                    </svg>
                </span>
                </div>
                </div>
                <div className='navBarGroupLeft' >
                <div className='settingsDiv' >
                    <span className='settings' >
                    <svg width="1em" height="1em" >
                        <path fill='#050505' d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
                    </svg>
                    </span>
                </div>
                </div>
                {/* <button onClick={() => this.props.logout()} >Log Out</button> */}
            </div> 
        )
    }


}
