import React from 'react';
import { Link } from 'react-router-dom'
export default class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    makeHeader() {
       return this.props.formType === "signup" ? 
       <h1>Signup!</h1> : 
       <h1>Login!</h1>
    }

    provideLink() {
        return this.props.formType === "signup" ? 
        <Link to="/login">Login!</Link> : 
        <Link to="/signup">Signup!</Link>
    }

    renderErrors() {
        if (this.props.errors.session.length === 0) {
            return null
        }
        return this.props.errors.session.map((error) => {
            return <p>{error}</p>
        })
        
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.makeHeader()}
                    <br/>
                    Welcome!
                    <br/>
                    Please {this.props.formType} or {this.provideLink()}
                    {this.renderErrors()}
                    <div>
                        <br/>
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br/>
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
  }