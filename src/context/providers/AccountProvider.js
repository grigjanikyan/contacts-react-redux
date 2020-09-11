import React, {Component, createContext} from 'react';
import { withRouter } from 'react-router-dom';
import {api} from "../../utils";


const AccountContext = createContext({});
export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends Component {
    state = {
        user: {},
        isLoggedIn: undefined
    }

    methods = {
        login: this.login.bind(this),
        logout: this.logout.bind(this),
    }


    componentDidMount() {
        this.checkIsLoggedIn();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state?.isLoggedIn && this.state.isLoggedIn !== prevState.isLoggedIn) {
            this.checkIsLoggedIn();
        }
    }

    checkIsLoggedIn() {
        const token = localStorage.getItem('auth') !== 'undefined' && localStorage.getItem('auth');
        if (token) {
            this.getUser(token);
        } else {
            this.setState({
                isLoggedIn: false
            })
        }
    }

    getUser(token) {
        api.get('', {seed: token, result: 1}).then(({info, results}) => {
            this.setState({
                user: results[0],
                isLoggedIn: true
            })
        })
    }

    login(email) {
        localStorage.setItem('auth', email)
        this.props.history.push('/profile');
    }

    logout() {
        localStorage.removeItem('auth');
        this.props.history.push('/');
    }

    render() {
        return (
            <AccountContext.Provider value={{...this.state, ...this.methods}}>
                {this.props.children}
            </AccountContext.Provider>
        )
    }
}

export default withRouter(AccountProvider);
