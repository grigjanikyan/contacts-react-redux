import React, {memo as Memo} from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAccountContext from "../context/consumers/AccountConsumer";
import {Loader} from "../components";

const PrivateRoute = Memo(({component: Component, ...props}) => {
    return (
        <Route
            {...props}
            render={innerProps =>
                props.isLoggedIn ? <Component {...innerProps}/> :
                    props.isLoggedIn === false ? <Redirect to={'/'}/> : <Loader/>}/>
    )
});


export default withAccountContext(PrivateRoute, ['isLoggedIn']);
