import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";

import { Home, Profile, Contacts } from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <PrivateRoute path='/profile' component={Profile}/>
            <PrivateRoute path='/contacts' component={Contacts}/>
        </Switch>
    )
}

export default withRouter(Routes);