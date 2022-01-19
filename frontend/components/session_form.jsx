import React from 'react';
import { Link } from 'react-router-dom'
export default class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      if (this.props.formType === "signup") {
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: ""
        };
      } else {
        this.state = {
            username: "",
            password: ""
        };
      }
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showModal = this.showModal.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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

    showModal() {
        this.props.showModal("signup")
    }

    createAccount() {
        return this.props.formType === "signup" ? 
        null : 
        <button onClick={this.showModal} >Create new account</button>
    }

    buttonText() {
        return this.props.formType === "signup" ? 
        "Sign Up" : 
        "Log In"
    }

    hideModal() {
        return this.props.formType === "signup" ?
        <button onClick={() => this.props.hideModal()} >Hide</button> :
        null
    }

    firstLastName() {
        return this.props.formType === "signup" ? 
        <div>
            <br/>
            <h1>Sign Up</h1>
            <p>It's quick and easy</p>
            <input placeholder='First name' 
                type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
            />
            <br/>
            <input placeholder='Last name' 
                type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
            />
        </div> : 
        null
    }

    render() {
        return (
            <div>
                {this.hideModal()}
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div>
                        {this.firstLastName()}
                            <input placeholder='Email or phone number' 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        <br/>
                            <input placeholder='Password' 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        <br/>
                        <input type="submit" value={this.buttonText()} />
                       
                    </div>
                </form>
                {this.createAccount()}
            </div>
        )
    }
  }