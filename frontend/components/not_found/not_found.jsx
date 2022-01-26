import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p>This page isn't available</p>
                <p>The link you followed may be broken, or the page may have been removed.</p>
                <button>
                    <Link to="/">Log In</Link>
                </button>
            </div>
        )
    }
}

export default NotFound;