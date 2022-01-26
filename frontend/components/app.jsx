import React from "react";
import GreetingContainer from "./greeting_container";
import ProfileContainer from "./profile/profile_container"
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ModalContainer from './modal/modal_container'
import NavBarContainer from "./navbar/navbar_container";
import NewMessageContainer from './new_message/new_message_container'
import NotFound from './not_found/not_found'

const App = () => {

    

    return (
        <div className="appPageConatianerDiv" >
            <ModalContainer />
            <Switch>
                
                <ProtectedRoute path="/users/:id" component={ProfileContainer} />
                <Route exact path="/" component={GreetingContainer} />
                <AuthRoute component={NotFound} />
                
            </Switch>
            <ProtectedRoute component={NavBarContainer} />
            <ProtectedRoute component={NewMessageContainer} />
            
        </div>
    )
  
};

export default App;