import React from "react";
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ModalContainer from './modal/modal_container'


const App = () => {
    return (
        <div>
            <ModalContainer />
            <Switch>
                <AuthRoute exact path="/" component={LoginFormContainer} />
            </Switch>
        </div>
    )
  
};

export default App;