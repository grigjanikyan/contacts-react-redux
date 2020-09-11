import React, {Fragment} from 'react';
import withAccountContext from "../../../context/consumers/AccountConsumer";
import {Avatar, Menu} from "antd";
import {Link} from "react-router-dom";

const ProfileBar = ({user, logout}) => {

    const handleClickMenu = (e) => {
        if (e.key === 'sign-out') {
            logout();
        }
    }

    return (
        <Menu mode={'horizontal'} onClick={handleClickMenu} className={'account-bar'}>
            <Menu.SubMenu title={
                <Fragment>
                    <Avatar src={user.picture.thumbnail}/>
                    <span>{`${user.name.title} ${user.name.first} ${user.name.last}`}</span>
                </Fragment>
            }>
                <Menu.Item key={'Account'}>
                    <Link to={'/profile'}>
                        Profile
                    </Link>
                </Menu.Item>
                <Menu.Item key="sign-out">
                    SignOut
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}

export default withAccountContext(ProfileBar, ['user', 'logout']);