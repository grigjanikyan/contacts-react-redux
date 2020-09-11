import React from 'react';

import { Layout } from 'antd';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import Routes from '../routes';

const { Content } = Layout;

const AppLayout = () => {
    return(
        <Layout>
          <AppHeader/>
          <Content>
            <Routes/>
          </Content>
          <AppFooter/>
        </Layout>
    )
}

export default AppLayout;