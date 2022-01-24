import React from 'react';
import { Link } from 'react-router-dom'
import { $CombinedState } from 'redux';
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
      this.makeInvalid = this.makeInvalid.bind(this);
      this.optionClick = this.optionClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    getDemoEmail(email, input) {
        return email.slice(0, input.value.length + 1)
    }

    getDemoPassword(password, input) {
        return password.slice(0, input.value.length + 1)
    }

    startDemo() {
        let processForm = this.props.processForm.bind()
        let getDemoEmail = this.getDemoEmail.bind(this)
        let getDemoPassword = this.getDemoPassword.bind(this)
        let usernameInput = document.getElementById('username')
        let passwordInput = document.getElementById('password')
        let username = 'alex@gmail.com'
        let password = 'Password1!'
        setTimeout(function fillInput() {
            if (usernameInput.value !== username) { 
                usernameInput.setAttribute('value', getDemoEmail(username, usernameInput))
                setTimeout(fillInput, 150) 
            } else { 
                passwordInput.setAttribute('value', getDemoPassword(password, passwordInput)) 
                if (passwordInput.value !== password) { 
                    setTimeout(fillInput, 150) 
                } else {
                    const user = Object.assign({}, {username: username, password: password});
                    processForm(user);
                }
            }
        }, 150)
        
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
        <button className='createAccount' onClick={this.showModal} >Create new account</button>
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
            <h1 className='signupText' >Sign Up</h1>
            <p className='quickAndEasyText' >It's quick and easy</p>
            <div className='firstAndLastOuterBox' >
            <input className='outerInputBox2 firstAndLast' placeholder='First name' 
                type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
            />
            <br/>
            <input className='outerInputBox2 firstAndLast' placeholder='Last name' 
                type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
            />
            </div>
        </div> : 
        null
    }

    makeInvalid(e) {
        if (!$('#firstName').is(":focus") && $('#firstName').hasClass('touched')) {
            $('#firstNamei').addClass('iconTouch')
        } else if ($('#firstName').is(":focus")) {
            $('#firstNamei').removeClass('iconTouch')
            $('#firstName').addClass('touched')
            $('#firstNamei').addClass('touched')
        }
        if (!$('#lastName').is(":focus") && $('#lastName').hasClass('touched')) {
            $('#lastNamei').addClass('iconTouch')
        } else if ($('#lastName').is(":focus")) {
            $('#lastNamei').removeClass('iconTouch')
            $('#lastName').addClass('touched')
            $('#lastNamei').addClass('touched')
        }
        if (!$('#emailMobile').is(":focus") && $('#emailMobile').hasClass('touched')) {
            $('#emailMobilei').addClass('iconTouch')
        } else if ($('#emailMobile').is(":focus")) {
            $('#emailMobilei').removeClass('iconTouch')
            $('#emailMobile').addClass('touched')
            $('#emailMobilei').addClass('touched')
        }

        if (!$('#signUpPassword').is(":focus") && $('#signUpPassword').hasClass('touched')) {
            $('#signUpPasswordi').addClass('iconTouch')
        } else if ($('#signUpPassword').is(":focus")) {
            $('#signUpPasswordi').removeClass('iconTouch')
            $('#signUpPassword').addClass('touched')
            $('#signUpPasswordi').addClass('touched')
        }

        if ($('#month').is(":focus") || $('#day').is(":focus") || $('#year').is(":focus")) {
            $('#birthdayI').removeClass('iconTouch')
            $('#month').removeClass('touchedYear')
            $('#day').removeClass('touchedYear')
            $('#year').removeClass('touchedYear')
            $('#month').addClass('touchedYear2')
            $('#day').addClass('touchedYear2')
            $('#year').addClass('touchedYear2')
            $('#birthdayI').addClass('touched')
        } else if (!$('#month').is(":focus") && $('#month').hasClass('touchedYear2') || !$('#day').is(":focus") && $('#day').hasClass('touchedYear2')  || !$('#year').is(":focus") && $('#year').hasClass('touchedYear2')) {
            console.log($('#year').val())
            if (parseInt($('#year').val()) > 2017) {
                $('#month').addClass('touchedYear')
                $('#day').addClass('touchedYear')
                $('#year').addClass('touchedYear')
                $('#birthdayI').addClass('iconTouch')
            }
        } 



        
    }

    optionClick() {
        console.log("hi")
        if (parseInt($('#year').val()) > 2017) {
            $('#month').addClass('touchedYear')
            $('#day').addClass('touchedYear')
            $('#year').addClass('touchedYear')
            $('#birthdayI').addClass('iconTouch')
            $('#month').blur()
            $('#day').blur()
            $('#year').blur()
        }
    
    }




    render() {
        return this.props.formType === "login" ?
            <div className='sessionForm' >
                {this.hideModal()}
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div>
                        {this.firstLastName()}
                            <div className='outerInputBox' >
                            <input id='username' className='emailAndPassword' placeholder='Email or phone number' 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                            </div>
                        <br/>
                            <div className='outerInputBox' >
                            <input id='password' className='emailAndPassword' placeholder='Password' 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                            </div>
                        <br/>
                        <input className='logIn' type="submit" value={this.buttonText()} />
                       <p className='demoLogin' onClick={()=>this.startDemo()} >Want to try a demo?</p>
                    </div>
                    <div className='loginGrayLineDiv' >
                        <div> </div>
                    </div>
                </form>
                {this.createAccount()}
            </div>
            :
            <div className='backgroundFade' onClick={this.makeInvalid} >
                <div className='sessionForm2' >
                    <div className='signUpTop' >
                        <div className='signUpTitle' >
                            <div>
                                Sign Up
                            </div>
                            <div>
                                It's quick and easy.
                            </div>
                        </div>
                        <div className='signUpExit' >
                            <img onClick={() => this.props.hideModal()}  className="signUpExitButton" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" alt="" width="24" height="24" id="u_1d_9_lO"/>
                        </div>
                        
                    </div>
                    <div className='border-1px' ></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='signUpInputs' >
                            <div className='signUpFirstAndLast' >
                                <input id='firstName' required type="text" placeholder='First name' value={this.state.firstName} onChange={this.update('firstName')} />
                                <i id='firstNamei' ></i> 
                                <input id='lastName' required type="text" placeholder='Last name' value={this.state.lastName} onChange={this.update('lastName')} />
                                <i id='lastNamei' ></i>     
                            </div>
                            <div className='signUpMobileEmailPassword' >
                                <input id='emailMobile' required type="text" required placeholder='Mobile number or email' value={this.state.username} onChange={this.update('username')} />
                                <i id='emailMobilei' ></i>
                            </div>
                            <div className='signUpMobileEmailPassword' >
                                <input id='signUpPassword' required type="password" required placeholder='New password' value={this.state.password} onChange={this.update('password')} />
                                <i id='signUpPasswordi' ></i>
                            </div>
                        </div>
                        <div className='signUpBirthday' >
                            <div>Birthday
                                <i className='signUpQuestionIcon' ></i>
                                <i id='birthdayI' ></i>
                            </div>
                            <div className='signUpDate' >
                                <span className='dropdown' >
                                    <select required onChange={this.optionClick} aria-label="Month" name="birthday_month" id="month" title="Month">
                                        <option value="1" defaultValue="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option>
                                    </select>
                                    <select required onChange={this.optionClick} aria-label="Day" name="birthday_day" id="day" title="Day">
                                        <option value="1"  >1</option><option value="2" >2</option><option value="3" >3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23" defaultValue="1">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
                                    </select>
                                    <select required onChange={this.optionClick} aria-label="Year" name="birthday_year" id="year" title="Year">
                                        <option value="2022" defaultValue="1" >2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className='signUpGender' >
                            <div>Gender
                                <i className='signUpQuestionIcon' ></i>
                            </div>
                            <div className='signUpGenderChoice' >
                                <span  data-type="radio" data-name="gender_wrapper" id="u_1_o_Op">
                                    <span >
                                        <label htmlFor="signUpFemale" >Female</label>
                                        <input type="radio"  name="sex" value="1" id="signUpFemale"/>
                                    </span>
                                    <span  >
                                        <label htmlFor="signUpMale"  >Male</label>
                                        <input type="radio"  name="sex" value="2" id="signUpMale"/>
                                    </span>
                                    <span  >
                                        <label htmlFor="signUpCustom" >Custom</label>
                                        <input type="radio"  name="sex" value="-1" id="signUpCustom"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className='signUpPolicy' >
                            <div>By clicking Sign Up, you agree to our <span>Terms</span>, <span>Data Policy</span> and <span>Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.</div>
                        </div>
                        <div className='signUpButton' >
                            <div>
                                <div>
                                    Sign Up
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
             </div>
    }
  }