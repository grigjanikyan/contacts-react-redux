import React from 'react';
import {Layout} from 'antd';
import {Link} from 'react-router-dom'
import withAccountContext from "../../../context/consumers/AccountConsumer";
import Icon from "@ant-design/icons";
import ProfileBar from "./ProfileBar";
import {LoginModal} from '../../../components';

const {Header} = Layout;


const AppHeader = ({isLoggedIn}) => {

    const Logo = () => {
        return(
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                viewBox="0 0 200 200" enableBackground="new 0 0 200 200"  >
                <circle id="center" cx="100" cy="100" r="18.67"/>
                <path id="ring1" d="M103.64,66.91c-0.37-1.68-1.85-2.93-3.64-2.93s-3.27,1.26-3.64,2.93C79.71,68.73,66.71,82.88,66.71,100
                    c0,18.36,14.93,33.29,33.29,33.29c18.36,0,33.29-14.93,33.29-33.29C133.29,82.88,120.29,68.73,103.64,66.91z M100,131.29
                    c-17.25,0-31.29-14.04-31.29-31.29c0-16.06,12.17-29.33,27.77-31.09c0.5,1.47,1.88,2.53,3.51,2.53s3.01-1.06,3.51-2.53
                    c15.6,1.75,27.77,15.02,27.77,31.09C131.29,117.25,117.25,131.29,100,131.29z"/>
                <path id="ring2" d="M145.54,100.71c0-25.11-20.43-45.54-45.54-45.54S54.46,75.6,54.46,100.71c0,23.89,18.49,43.53,41.92,45.39
                    c0.38,1.65,1.86,2.89,3.63,2.89s3.24-1.23,3.63-2.89C127.05,144.24,145.54,124.6,145.54,100.71z M103.53,144.09
                    c-0.49-1.49-1.87-2.57-3.53-2.57s-3.04,1.08-3.53,2.57c-22.36-1.8-40.01-20.57-40.01-43.39c0-24.01,19.53-43.54,43.54-43.54
                    c24.01,0,43.54,19.53,43.54,43.54C143.54,123.53,125.89,142.29,103.53,144.09z"/>
                <path id="ring3" d="M100,41.61c-30.9,0-56.27,24.09-58.34,54.48c-1.65,0.38-2.88,1.86-2.88,3.62c0,1.74,1.2,3.2,2.82,3.61
                    c1.68,30.76,27.23,55.27,58.4,55.27c32.25,0,58.49-26.24,58.49-58.49C158.49,67.85,132.25,41.61,100,41.61z M100,156.59
                    c-30.09,0-54.75-23.65-56.4-53.33c1.52-0.47,2.64-1.87,2.64-3.55c0-1.66-1.09-3.04-2.58-3.53C45.68,66.85,70.17,43.61,100,43.61
                    c31.15,0,56.49,25.34,56.49,56.49S131.15,156.59,100,156.59z"/>
            </svg>
        )
    }

    const SocIcon = props => <Icon component={Logo} {...props} />;

    return (
        <Header className={`header ${window.location.pathname === '/' ? 'hdr-home' : ''}`}>
            <SocIcon></SocIcon>
            {isLoggedIn ?
                <div className='menu'>
                    <Link to='/profile' >Profile</Link>
                    <Link to='/contacts' >Contacts</Link>
                </div>
            :
            null
            }
            {!isLoggedIn ? <LoginModal/> : <ProfileBar/>}
        </Header>
    )
}

export default withAccountContext(AppHeader, ['isLoggedIn']);
