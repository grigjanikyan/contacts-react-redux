import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import withAccountContext from "../../../context/consumers/AccountConsumer";
import ProfileBar from "./ProfileBar";
import { LoginModal } from '../../../components';
import SocIcon from '../../../components/Icons';
const { Header } = Layout;


const AppHeader = ({isLoggedIn}) => {
    return (
        <Header className={`header ${window.location.pathname === '/' ? 'hdr-home' : ''}`}>
            <Link to='/' >
              <SocIcon/>
            </Link>
            {
                isLoggedIn 
                    ? ( 
                        <>
                          <div className='menu'>
                             <Link to='/profile' >Profile</Link>
                             <Link to='/contacts' >Contacts</Link>
                          </div>
                          <ProfileBar/>
                      </>
                      )
                    : <LoginModal/> 
            }
        </Header>
    )
}

export default withAccountContext(AppHeader, ['isLoggedIn']);
