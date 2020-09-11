import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className={`footer ${window.location.pathname === '/' ? 'ftr-home' : ''}`}>
            <p className='all-rights font-fenix white'>
                {new Date().getFullYear()} &#169; ALL Rights Reserved
            </p>
        </Footer>
    )
}

export default AppFooter;
