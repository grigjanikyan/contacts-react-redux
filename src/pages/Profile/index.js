import React from 'react';
import { CopyOutlined } from "@ant-design/icons";
import withAccountContext from "../../context/consumers/AccountConsumer";

import Page from '../../components/Page'

const Profile = ({user}) => {
    return (
        <Page className='profile'>
            <h1 className='page-title'>Profile</h1>
            <div className='profile-info'>
                <div className='profile-pic'>
                    <img src={user.picture.large}/>
                </div>
                <div className='info'>
                    <h2 className='single-info name'>
                        {`${user.name.title} ${user.name.first} ${user.name.last}`}
                        <h5 className='age'>{user.dob.age}</h5>
                    </h2>
                    <h2 className='single-info email'>
                        <CopyOutlined/>
                        <h4>{user.email}</h4>
                    </h2>
                    <h2 className='single-info phone'>
                        <CopyOutlined/>
                        <h4>{user.phone}</h4>
                    </h2>
                    <h2 className='single-info address'>
                        <CopyOutlined/>
                        <h4>
                            {`
                            ${user.location.country} 
                            ${user.location.state}
                            ${user.location.city}  
                            ${user.location.street.name}
                            ${user.location.street.number}
                            `}
                        </h4>
                    </h2>
                </div>
            </div>
        </Page>
    )
}

export default withAccountContext(Profile, ['user']);
